# Greeter - A demo app for `capejs-rails` gem

This is the Git repository for _Greeter,_ which is a simple application
created using [Cape.JS](https://github.com/capejs/capejs) and [Ruby on Rails](https://github.com/rails/rails).

By reading its source code, you can learn how to construct _Single Page Applications_ (SPAs)
combining the Cape.JS as front-end framework with the Rails as back-end framework.

## Requirements

* Ruby 2.2.2 or higher
* Node 5.5 or higher

## Getting Source Code

### Using `wget` and `unzip`

```text
$ wget https://github.com/capejs/greeter-demo/archive/master.zip
$ unzip master.zip
$ mv greeter-demo-master greeter-demo
```

### Using `git`

```text
$ git clone git://github.com/capejs/greeter-demo.git
```

## Setting up and starting the server

Run following commands on the directory that the file `README.md` exists on.

```text
$ cd greeter-demo
$ bin/bundle
$ bin/rails db:setup
$ bin/rails s
```

## Usage

Open http://localhost:3000 with your browser.

## References

* [How to Make a Single Page Application (SPA) with Cape.JS and Rails](http://capejs.github.io/capejs/tutorials/greeter/)
- A tutorial based on the source code of this application.
* [Todo List](https://github.com/oiax/capejs-demo-on-rails)
- Another demo app using Cape.JS and Ruby on Rails.
* [Cape.JS Documentation](http://capejs.github.io/capejs/)

## License

Greeter is released under [the MIT License](LICENSE).
