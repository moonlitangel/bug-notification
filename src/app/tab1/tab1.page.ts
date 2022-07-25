import { Component } from '@angular/core';
import { LocalNotifications, Schedule } from '@capacitor/local-notifications';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  localNoti() {
    LocalNotifications.schedule({
      notifications: [
        {
          title: '오늘도 즐거운 하루 😀',
          body: '미션으로 하루를 시작해볼까요?', 
          id: 99,
          schedule: {
            on: {hour: 8, minute: 0}, allowWhileIdle: true}
        }, {
          title: '미션 완료하면 키가 쑥쑥!',
          body: '아직 수행하지 않은 미션이 있나요? 미션 완료하고 키도 쑥쑥!',
          id: 88,
          schedule: {
            on: {hour: 18, minute: 0}, allowWhileIdle: true}
        }
      ]
    })
  }

}
