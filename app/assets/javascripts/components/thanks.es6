class Thanks extends Cape.Component {
  render(m) {
    m.p("Thank you!")
    m.div(m => {
      m.onclick(e => $router.navigateTo(''))
        .class('btn btn-primary').btn('Return to the top page')
    })
  }
}
