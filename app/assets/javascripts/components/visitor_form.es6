class VisitorForm extends Cape.Component {
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
      m.onclick(e => $router.navigateTo('thanks'))
        .class('btn btn-primary').btn('Submit')
    })
  }
}
