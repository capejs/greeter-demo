class Reception extends Cape.Component {
  render(m) {
    m.p("Hi, I am Greeter. Nice to meet you!")
    m.div(m => {
      m.onclick(e => $router.navigateTo('visitor_form'))
        .class('btn btn-primary')
        .btn('Proceed to the Entry Form')
    })
  }
}
