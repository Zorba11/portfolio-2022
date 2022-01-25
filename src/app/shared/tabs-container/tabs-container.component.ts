import { Component, AfterContentInit, OnInit, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent> = new QueryList();

  constructor() { }

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter(
      tab => tab.active
    );

    // making first tab active by default
    if(!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first);
    }

  }

  selectTab(tab: TabComponent) {
    // making other tabs inactive
    this.tabs?.forEach(tab => {
      tab.active = false;
    })

    // make the selected tab active
    tab.active = true;

    // by returning false angular will prevent default refresh behaviour
    return false
  }

}
