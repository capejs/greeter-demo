class TextFieldSet extends Cape.Partial {
  render(m, name, labelText) {
    let errors = this.parent.errors && this.parent.errors[name]

    if (errors) m.class('has-danger')

    m.class('form-group').fieldset(m => {
      m.class('form-control-label').labelFor(name, labelText)
      m.class('form-control').textField(name)

      if (errors) {
        m.class('text-danger small').ul(m => {
          errors.forEach(error => m.li(error))
        })
      }
    })
  }
}
