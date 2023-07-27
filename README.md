# ngClick Directive

This directive allows you to assign the functionality of receiving the click event when pressing "Enter" after navigating using the tab keys.

## Usage

Installation:

First, make sure the ngClick directive is present in your Angular project. You can add it to a module or a standalone component.

## Implementation:

Add the ngClick directive to the elements you want to receive the click event when pressing "Enter". Here's an example in your HTML template:

```html
<ul>
  <li tabindex="1" ngClick (click)="handleItemClick()">Item 1</li>
  <li tabindex="2" ngClick (click)="handleItemClick()">Item 2</li>
  <li tabindex="3" ngClick (click)="handleItemClick()">Item 3</li>
</ul>
```

Make sure to define the handleItemClick() function in your component to execute when "Enter" is pressed on one of the elements.

## Functionality:

When one of the elements is focused due to navigation using the tab keys and "Enter" is pressed, the EnterClickDirective will detect the event and, after verifying that the focused element is the same as the one associated with the directive, it will call the click event associated with that element.

Therefore, when you press "Enter" on the focused element, the handleItemClick() function will be executed, allowing you to perform the desired actions.

Ensure to import and declare the directive:

Before using the directive, make sure to import and declare it in the module containing the component where you're using it.

```typescript
// app.module.ts or the module where you need to use the directive
import { NgModule } from "@angular/core";
import { EnterKeyClickDirective } from "./enter-key-click.directive";

@NgModule({
  declarations: [
    // ...
    EnterKeyClickDirective,
  ],
  // ...
})
export class AppModule {}
```

With these steps, you should now be able to assign the functionality of receiving the click event when pressing "Enter" after navigating using the tab keys to the elements you desire in your Angular application.
