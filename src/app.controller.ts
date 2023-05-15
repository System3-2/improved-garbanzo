import { Controller, Get, Render } from "@nestjs/common";

@Controller()
export class AppController {
  constructor() { }

  @Get('/')
  @Render('index')
  home() {
    return {
      message: 'Testing page',
      title: 'Home page'
    }
  }

}
