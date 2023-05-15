import { Controller, Get, Render, Req } from "@nestjs/common";

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

  @Get('login')
  @Render('login')
  login() {
    return {}
  }

}
