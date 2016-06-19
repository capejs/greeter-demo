var Visitors = Visitors || {}

;((namespace) => {

  class List extends Cape.Component {
    init() {
      this.agent = new VisitorListAgent(this)
      this.agent.refresh()
    }

    render(m) {
      m.h4('Visitors List')
      m.ol(m => {
        this.agent.objects.forEach(visitor => {
          m.li(`${visitor.family_name}, ${visitor.given_name}`)
        })
      })
      m.div(m => {
        m.onclick(e => $router.navigateTo(''))
          .class('btn btn-primary')
          .btn('Go Back')
      })
    }
  }

  namespace.List = List

})(Visitors)
