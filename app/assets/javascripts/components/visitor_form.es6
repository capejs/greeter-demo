class VisitorForm extends Cape.Component {
  render(m) {
    m.p("Please fill in your name on this form.")
    m.div(m => {
      m.onclick(e => $router.navigateTo('thanks'))
        .class('btn btn-primary').btn('Submit')
    })
  }
}
