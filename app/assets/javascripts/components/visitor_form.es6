class VisitorForm extends Cape.Component {
  init() {
    this.agent = new VisitorListAgent(this)
    this.refresh()
  }

  render(m) {
    let errorMessage = new ErrorMessage(this)
    let textFieldSet = new TextFieldSet(this)

    m.p("Please fill in your name on this form.")

    if (this.errors) errorMessage.render(m)

    m.formFor('visitor', m => {
      textFieldSet.render(m, 'family_name', 'Family Name')
      textFieldSet.render(m, 'given_name', 'Given Name')
      m.onclick(e => this.submit())
        .class('btn btn-primary').btn('Submit')
    })
  }

  submit() {
    this.agent.create(this.paramsFor('visitor'), data => {
      if (data.result === 'Success') {
        $router.navigateTo('thanks')
      }
      else {
        this.errors = data.errors
        this.refresh()
      }
    })
  }
}
