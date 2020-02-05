import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-mediaformat',
  templateUrl: './mediaformat.page.html',
  styleUrls: ['./mediaformat.page.scss'],
})
export class MediaFormatPage implements OnInit {
  courseID: number;
  courseCode: string;
  courseTitle: string;

  /**
   * Constructor of our course viewer page
   * @param activatedRoute Information about the route we are on
   * @param courseCodeService The course code Service to get data
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private nativeStorage: NativeStorage) {
      this.nativeStorage.getItem('selectedcourse').then(
        selectedCourse => {
          this.courseCode = selectedCourse.Code;
          this.courseTitle = selectedCourse.Title;
         },
        () => {}
      );
  }

  ngOnInit() {
    // Get the ID that was passed with the URL    
    this.activatedRoute.params.subscribe(
      params => {                 
        this.courseID = +params['courseid'];
      }
    );
  }
}