# TECHINPORTO

[![Software License][ico-license]](LICENSE)    

Source code of [https://techinporto.com/](https://techinporto.com/).

## Usage

**Quick setup with docker**
```bash
$ git clone https://github.com/JumiaGroup/tip-web.git techinporto.com
$ cd techinporto.com
$ docker run --rm --label=jekyll --volume=$(pwd):/srv/jekyll -it -p 4000:4000 jekyll/jekyll:3.7.0 jekyll serve
# => Now browse to http://localhost:4000
```

**OR installing jekyll**

Install Jekyll using info provided in https://jekyllrb.com/
```bash
$ git clone https://github.com/JumiaGroup/techblog.git techinporto.com
$ cd techinporto.com
$ bundle exec jekyll serve
# => Now browse to http://localhost:4000
```

## Dependencies
- Jekyll
- Docker (optional)


## Contributing
Contributions are welcome and will be fully credited.   
You can contribute with new posts or pages but feel free to contribute with design/development changes as well.  
  
Check [contributing guidelines](CONTRIBUTING.md).


## Security

If you discover any security related issues, please email tiago.lopes@jumia.com instead of using the issue tracker.

## Credits

- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square
[link-contributors]: ../../contributors
