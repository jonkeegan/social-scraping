# Scraping Social Media Training

## Tools

This is a Mac-focused tutorial, but many of these tools run prefectly well on Windows or Linux machines. 

This assumes you have admin priveleges for your Mac. Also it requires the participant to have a valid Facebook and Twitter account. 

Xcode command line tools. This is Apple's developer toolkit that installs lots of important tools we'll be using. 

Open the Terminal. You can find it from the Mac Desktop: Go > Utilities > Terminal. 

Enter the following text: 

`xcode-select --install`

You will get a prompt to reads: "Get Xcode", "Cancel" or "Install". Skip installing the entire Xcode application. Choose install to get just the (smaller) command line tools. 

Once that has all been installed (may take a while), you will imstall "Homebrew" which is a software package manager for the Mac. Sort of like an app store for code. 

In the terminal type: 

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

Once that is complete, installation of command lines tools are much, much simpler.

brew install node
brew install wget

Install "t" the Twitter command line client. (The follwing instructions are from the GitHub page of the creator https://github.com/sferik/t)

https://github.com/sferik/t

First type this into the terminal: `ruby -v`

If the output looks something like this, you're in good shape:

`ruby 2.3.1p112 (2016-04-26 revision 54768) [x86_64-darwin15]`

Once you are sure Ruby is installed, enter this into the terminal:

`sudo gem install t`

## Chrome Browser

We'll be using the Chrome browser. If you haven't installed it yet, please do so. Then add this "Scraper" plugin:

https://chrome.google.com/webstore/detail/scraper/mbigbapnjcgaffohmbkdlecaccepngjd

If you get stuck, just remember what happened, ands take a screenshot and we should be able to get everyone working for the session.



