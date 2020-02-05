import { Component, OnInit, OnDestroy } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { LoadingController, Platform, AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import * as CryptoJS from 'crypto-js';
import { Course } from 'src/app/models';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { from } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-bulkdownload',
  templateUrl: './bulkdownload.page.html',
  styleUrls: ['./bulkdownload.page.scss'],
})
export class BulkDownloadPage implements OnInit, OnDestroy {
  courses: Course[];
  fileName: string;
  fileNameTemp: string;
  dirName: string;
  systemBase: string;
  dirBase: string = "/.UMYU/.data/.materials/";
  downloadURL: string = "http://umyu.easystudy.com.ng/materials/";
  count: number = 0;
  totalFiles: number;
  fileFormat: string;
  fileExtension: string;

  /**
   * Constructor of our course viewer page
   * @param activatedRoute Information about the route we are on
   * @param courseCodeService The course code Service to get data
   */
  constructor(
    public loadingCtrl: LoadingController,
    private platform: Platform,
    private file: File,
    private http: HttpClient,
    private nativeHttp: HTTP,
    private fileTransfer: FileTransfer,
    private toastCtrl: ToastController,
    private alertController: AlertController) {
  }

  ngOnInit() {    
    if(this.platform.is('android')) {
      this.systemBase =  this.file.externalRootDirectory + "/Documents";
    } else if(this.platform.is('ios')) {
      this.systemBase =  this.file.documentsDirectory + "/Documents";
    } else if(this.platform.is('desktop')) {
      this.systemBase =  this.file.dataDirectory;
    } else if(this.platform.is('tablet')) {
      this.systemBase =  this.file.dataDirectory;
    } else {
      this.systemBase =  this.file.dataDirectory;
    }    
 
    // Get the courses from the API    
    this.courses = JSON.parse(localStorage.getItem('course'));

    if (this.courses === null) {
      this.getCourses();
    }
  }
 
  getCourses() {
    if(this.platform.is('android')) {
      this.getCourseNativeHttp();
    } else if(this.platform.is('ios')) {
      this.getCourseNativeHttp();
    } else if(this.platform.is('desktop')) {
      this.getCourseStandard();
    } else if(this.platform.is('tablet')) {
      this.getCourseStandard();
    } else {
      this.getCourseStandard();
    }
  }

  async getCourseStandard() {

    let loading = await this.loadingCtrl.create({
      message: 'Loading courses, please wait...'
    });
    await loading.present();

    let _httpHeaders = new HttpHeaders()
     .set('Content-Type', 'application/json')
     .set('Cache-Control', 'no-cache');

    let httpHeaders = {
      headers: _httpHeaders
    };
 
    this.http.get('http://umyu.easystudy.com.ng/api/v1/api/v1/course/code', httpHeaders).pipe(
      finalize(() => loading.dismiss())
    ).subscribe(data => {
      this.courses = data['Codes'];
      this.setupCourses();
      this.presentToast("Loading Completed!");
    }, error => {
      this.presentAlert("Error!", "Error calling API: " + JSON.stringify(error));
    });
  }  
 
  async getCourseNativeHttp() {
    
    let loading = await this.loadingCtrl.create({
      message: 'Loading courses, please wait...'
    });
    await loading.present();
 
    // Returns a promise, need to convert with of() to Observable (if want)!
    from(this.nativeHttp.get('http://umyu.easystudy.com.ng/api/v1/api/v1/course/code', {}, {'Content-Type': 'application/json'})).pipe(
      finalize(() => loading.dismiss())
    ).subscribe(data => {
      let parsed = JSON.parse(data.data);
      this.courses = parsed.Codes;
      this.setupCourses();
      this.presentToast("Loading Completed!");
    }, error => {
      this.presentAlert("Error!", "Error calling API: " + JSON.stringify(error));
    });
  }  

  setupCourses() {
    localStorage.setItem('course', JSON.stringify(this.courses));
  }

  async presentToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async presentAlert(header, message, ) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [{
          text: 'OK',
          handler: () => {}
        }]
    });

    await alert.present();
  }

  async verifyMediaDownload(fileFormat: string, fileExtension: string) {
    this.fileFormat = fileFormat;
    this.fileExtension = fileExtension;

    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'This action will download all course contents in (' + this.fileExtension + ') format to your drive, this action may take some time depending on your internet download speed. Proceed?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {}
        }, {
          text: 'Okay',
          handler: async () => {
            await this.prepareMediaDownload();
          }
        }
      ]
    });

    await alert.present();
  }

  async prepareMediaDownload(): Promise<void> {

    // this.courses = JSON.parse(localStorage.getItem('course'));
    this.totalFiles = this.courses.length;

    this.presentToast("Process Start!");
    
    this.dirName = this.systemBase + this.dirBase + "."  + this.fileFormat + "s/";

    // for (let i = 0; i < this.totalFiles; i++) {
    for (const course of this.courses) {
      this.fileNameTemp = this.fileFormat + "filetemp" + course.id + this.fileExtension;
      this.fileName =  this.fileFormat + "file" + course.id + this.fileExtension;
      this.downloadURL = "http://umyu.easystudy.com.ng/materials/" + this.fileFormat  + "/" + this.fileName;

      // await is converting Promise<number> into number
      const count:number = await this.startMediaDownload(course.id);
      // console.log(count);
    }

    // Send success notification to user
    this.presentToast("Process completed!");
  }

  startMediaDownload(count: number): Promise<number> {

    let isDownloaded = false;

    // Initialize transfer handle
    const transfer = this.fileTransfer.create();    

    return new Promise<number>(resolve => {
      this.loadingCtrl.create({
        message: "Processing " + count + " of " + this.totalFiles + " file(s), please wait..."
      }).then((res) => {
        res.present();
        res.onDidDismiss().then((dis) => {});

        setTimeout(() => {
          if (isDownloaded === false) {
            // Abort active transfer:
            transfer.abort();          
    
            // Remove incomplete downloaded file
            this.file.removeFile(this.dirName, '~' + this.fileNameTemp)
            .then(() => {
              this.loadingCtrl.dismiss();
              resolve(count);
            })
            .catch((error) => {
              this.loadingCtrl.dismiss();
              this.presentToast("Error removing file: " + '~' + this.fileNameTemp + " Error: " + JSON.stringify(error));
            });
        
            // Send failure notification to user
            this.presentToast("File download timed out for file " + this.fileNameTemp);
          }
        }, 60000);
      });    

      // transfer.onProgress((progressEvent) => {
      //   var counter = Math.floor(progressEvent.loaded / progressEvent.total * 100);
      // });

      // Verify if selected file for download already exist on the device
      this.file.checkFile(this.dirName, this.fileName)
      .then(() => {

        isDownloaded = true;
        this.loadingCtrl.dismiss();

        resolve(count);
      })
      .catch(() => {
        // Start the dowload for the selected file
        transfer.download(this.downloadURL, this.dirName + this.fileNameTemp)
        .then(async () => {
          isDownloaded = true;
          // this.loadingCtrl.dismiss(); // Don't delete yet

          // Process downloaded media
          // const count1:number = await this.processMedia(count);

          // Start reading the selected file content for encryption
          this.file.readAsDataURL(this.dirName, this.fileNameTemp)
          .then((fileContent: string) => {
            const encFileContent = CryptoJS.AES.encrypt(fileContent, ":<>?{}|[]\!@#$%^&*()_+").toString();

            this.file.writeFile(this.dirName, this.fileName, encFileContent, {replace: true, append: false})
            .then(() => {

              this.file.removeFile(this.dirName, this.fileNameTemp)
              .then(() => {
                this.loadingCtrl.dismiss();
                resolve(count);
              })
              .catch((error) => {
                this.loadingCtrl.dismiss();
                this.presentToast("Error removing file: " + this.fileNameTemp + " Error: " + JSON.stringify(error));
              });

            })
            .catch((error) => {
              this.loadingCtrl.dismiss();
              this.presentToast("Error writing file: " + this.fileName + " Error: " + JSON.stringify(error));
            });
            
          })
          .catch((error) => {
            this.loadingCtrl.dismiss();
            this.presentToast("Error reading file: " + this.fileNameTemp + " Error: " + JSON.stringify(error));
          });

        })
        .catch((error) => {
          isDownloaded = false;
          this.loadingCtrl.dismiss();
    
          // Send failure notification to user
          this.presentToast("File download failed for file: " + this.fileNameTemp + " Error: " + JSON.stringify(error));
          resolve(count);
        });        
      });
    });
  }

  ngOnDestroy() {}
}