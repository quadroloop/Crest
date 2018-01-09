# Crest
[![Travis](https://img.shields.io/travis/rust-lang/rust.svg)]() [![Coveralls bitbucket branch](https://img.shields.io/coveralls/bitbucket/pyKLIP/pyklip.svg)]() [![Uptime Robot status](https://img.shields.io/uptimerobot/status/m778918918-3e92c097147760ee39d02d36.svg)]() 
[![app](https://quadroloop.github.io/Crest/crest-screen-shot.png)]()
 > Crest is an open-source text-editor for code templating and generation through Javascript!

# Demo
> click to logo to visit the app.

[![Crest-logo](https://quadroloop.github.io/Crest/crest-logo.png)](https://quadroloop.github.io/Crest)


# Features
   - Templating Code
   - Adding Prefix and Suffix
   - Consuming API's
   - Generating Templated code
   - Configurable Theme
   - Command Based Navigation


# Commands
Crest uses the following commands for it's functionalities
simply use the following commands in the "command here" textbox at the bottom of the screen.

### Affix Command
> for adding suffix and prefix to code
```c
affix#(prefix-here)#(suffix-here)
```
### Tempate Command
> for calling an imported code template
```c
tmp#(template-index)#(data-1)#(data-2)#(data-n)
```
> example commnad.
```c
tmp#0#This is the first value of my tempplete to be parsed#this is the second one#
```
> where "n" is the value if which index you wanted crest to bind the data into.


### Tech



Crest uses a the following technologies to works
* [Ace Editor] - Awesome web based text editor
* [jQuery] - Yeah baby!
* [limonte-sweet-alert-2] - for awesome modals :).


