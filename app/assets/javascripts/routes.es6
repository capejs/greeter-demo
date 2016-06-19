var $router = new Cape.Router()

$router.draw(m => {
  m.root('reception')
})

document.addEventListener("DOMContentLoaded", event => {
  $router.mount('main')
  $router.start()
})
