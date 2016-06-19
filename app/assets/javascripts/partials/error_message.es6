class ErrorMessage extends Cape.Partial {
  render(m) {
    m.class('alert alert-danger').div(m => {
      if (Object.keys(this.parent.errors).length === 1)
        m.text('An error is found in the form.').sp()
          .text('Please correct it and try again.')
      else
        m.text('Some errors are found in the form.').sp()
          .text('Please correct them and try again.')
    })
  }
}
