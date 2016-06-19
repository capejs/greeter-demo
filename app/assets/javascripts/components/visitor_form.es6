class VisitorForm extends Cape.Component {
  init() {
    this.agent = new VisitorListAgent(this)
    this.refresh()
  }

  render(m) {
    m.p("Please fill in your name on this form.")
    m.formFor('visitor', m => {
      m.class('form-group').fieldset(m => {
        m.labelFor('family_name', 'Family Name')
        m.class('form-control').textField('family_name')
      })
      m.class('form-group').fieldset(m => {
        m.labelFor('given_name', 'Given Name')
        m.class('form-control').textField('given_name')
      })
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
        this.refresh()
      }
    })
  }
}
