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

  @Get('*')
  @Render('404')
  notFound() {
    return {
      message: 'Oops not found',
      title: '404'
    }
  }
}
