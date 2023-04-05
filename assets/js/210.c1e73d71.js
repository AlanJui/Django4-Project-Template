(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{495:function(t,a,n){"use strict";n.r(a);var e=n(10),i=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vagrant-安裝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vagrant-安裝"}},[t._v("#")]),t._v(" Vagrant 安裝")]),t._v(" "),a("h1",{attrs:{id:"macos-catalina-10-15-作業"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macos-catalina-10-15-作業"}},[t._v("#")]),t._v(" macOS Catalina 10.15 作業")]),t._v(" "),a("h2",{attrs:{id:"安裝-virtualbox-軟體"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝-virtualbox-軟體"}},[t._v("#")]),t._v(" 安裝 VirtualBox 軟體")]),t._v(" "),a("p",[t._v("至官網下載軟體與執行安裝：VirtualBox 6.0.12。\nhttps://www.virtualbox.org/wiki/Downloads")]),t._v(" "),a("h2",{attrs:{id:"安裝-vagrant-軟體"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝-vagrant-軟體"}},[t._v("#")]),t._v(" 安裝 Vagrant 軟體")]),t._v(" "),a("p",[t._v("【安裝法一】：至官網下載 .dmg 安裝檔案")]),t._v(" "),a("p",[t._v("【安裝法二】：使用 brew")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("$ brew cask install vagrant\n$ brew cask install vagrant-manager\n")])])]),a("p",[t._v("https://www.vagrantup.com/")]),t._v(" "),a("h2",{attrs:{id:"解除安裝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解除安裝"}},[t._v("#")]),t._v(" 解除安裝")]),t._v(" "),a("p",[a("strong",[t._v("安裝套件（.dmg）提供之工具")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Last login: Mon Nov 11 21:26:18 on ttys002\n/Volumes/Vagrant/uninstall.tool ; exit;\n\nalanjui@MBP-2018:~ \n$ /Volumes/Vagrant/uninstall.tool ; exit;\nThe following files and directories will be removed:\n    /opt/vagrant\n    /usr/local/bin/vagrant\n\nDo you wish to uninstall Vagrant (Yes/No)?\n")])])]),a("p",[a("strong",[t._v("手動解除安裝")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("rm -rf /opt/vagrant\nrm -f /usr/local/bin/vagrant\nsudo pkgutil --forget com.vagrant.vagrant\n")])])]),a("h2",{attrs:{id:"安裝-vagrant-附件軟體"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝-vagrant-附件軟體"}},[t._v("#")]),t._v(" 安裝 Vagrant 附件軟體")]),t._v(" "),a("p",[a("strong",[t._v("安裝 vagrant-libvirt plugin")])]),t._v(" "),a("p",[t._v("【參考文件】： vagrant-libvirt 無法正常安裝排解法\nhttps://github.com/vagrant-libvirt/vagrant-libvirt/issues/497#issuecomment-331226071")]),t._v(" "),a("p",[t._v("（0）完成 Homebrew 安裝")]),t._v(" "),a("p",[t._v("（1）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("brew install libiconv gcc libvirt\n")])])]),a("p",[t._v("（2）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("$ /opt/vagrant/embedded/bin/ruby --version\nruby 2.4.6p354 (2019-04-01 revision 67394) [x86_64-darwin13]\n")])])]),a("p",[t._v("（3）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("$ CONFIGURE_ARGS='with-ldflags=-L/opt/vagrant/embedded/lib with-libvirt-include=/usr/local/include/libvirt with-libvirt-lib=/usr/local/lib' \\\nGEM_HOME=~/.vagrant.d/gems/2.4.6 \\\nGEM_PATH=$GEM_HOME:/opt/vagrant/embedded/gems \\\nPATH=/opt/vagrant/embedded/bin:$PATH \\\nvagrant plugin install vagrant-libvirt\nInstalling the 'vagrant-libvirt' plugin. This can take a few minutes...\nBuilding native extensions.  This could take a while...\nFetching: fog-libvirt-0.6.0.gem (100%)\nFetching: vagrant-libvirt-0.0.45.gem (100%)\nInstalled the plugin 'vagrant-libvirt (0.0.45)'!\n\nalanjui@MBP-2018:~/workspace/vagrant/test-004\n$\n\n\n$ CONFIGURE_ARGS='with-ldflags=-L/opt/vagrant/embedded/lib with-libvirt-include=/usr/local/include/libvirt with-libvirt-lib=/usr/local/lib' \\\nGEM_HOME=~/.vagrant.d/gems/2.4.4 \\\nGEM_PATH=$GEM_HOME:/opt/vagrant/embedded/gems \\\nPATH=/opt/vagrant/embedded/bin:$PATH \\\nvagrant plugin install vagrant-libvirt\n")])])]),a("p",[t._v("（4）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("$ brew install libvirt\n")])])]),a("p",[t._v("【註】：如何啟動 libvirt :")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("To have launchd start libvirt now and restart at login:\n  brew services start libvirt\nOr, if you don't want/need a background service you can just run:\n  libvirtd\n==> Summary\n🍺  /usr/local/Cellar/libvirt/5.8.0: 506 files, 36.0MB\n\n\nalanjui@MBP-2018:~/workspace/vagrant/test-003\n$ brew services start libvirt\n==> Successfully started `libvirt` (label: homebrew.mxcl.libvirt)\n")])])]),a("p",[a("strong",[t._v("安裝 VirtualBox Guest Additions 自動更新 plugin")])]),t._v(" "),a("p",[t._v("（1）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("$ vagrant plugin install vagrant-vbguest\n\n\nalanjui@MBP-2018:~/workspace/Python/django_002 (master)\n$ vagrant plugin install vagrant-vbguest\nInstalling the 'vagrant-vbguest' plugin. This can take a few minutes...\nFetching: micromachine-3.0.0.gem (100%)\nFetching: vagrant-vbguest-0.20.0.gem (100%)\nInstalled the plugin 'vagrant-vbguest (0.20.0)'!\n")])])]),a("p",[t._v("【參考文件】：  How to update VirtualBox Guest Additions with Vagrant")]),t._v(" "),a("p",[t._v("https://gist.github.com/fernandoaleman/5083680")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://gist.github.com/fernandoaleman/5083680",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gist.github.com/fernandoaleman/5083680"),a("OutboundLink")],1)]),t._v(" "),a("h1",{attrs:{id:"ubuntu-18-04-作業"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-18-04-作業"}},[t._v("#")]),t._v(" Ubuntu 18.04 作業")]),t._v(" "),a("h2",{attrs:{id:"安裝-virtualbox-6-軟體套件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝-virtualbox-6-軟體套件"}},[t._v("#")]),t._v(" 安裝 VirtualBox 6 軟體套件")]),t._v(" "),a("p",[t._v("https://computingforgeeks.com/install-virtualbox-6-0-on-ubuntu-18-04-debian-9-ubuntu-16-04/")]),t._v(" "),a("h2",{attrs:{id:"安裝-vagrant-軟體套件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝-vagrant-軟體套件"}},[t._v("#")]),t._v(" 安裝 Vagrant 軟體套件")]),t._v(" "),a("p",[a("strong",[t._v("啟動 vagrant")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("$ vagrant up\nVagrant failed to initialize at a very early stage:\n\nThe plugins failed to initialize correctly. This may be due to manual\nmodifications made within the Vagrant home directory. Vagrant can\nattempt to automatically correct this issue by running:\n\n  vagrant plugin repair\n\nIf Vagrant was recently updated, this error may be due to incompatible\nversions of dependencies. To fix this problem please remove and re-install\nall plugins. Vagrant can attempt to do this automatically by running:\n\n  vagrant plugin expunge --reinstall\n\nOr you may want to try updating the installed plugins to their latest\nversions:\n\n  vagrant plugin update\n\nError message given during initialization: Unable to resolve dependency: user requested 'vagrant-libvirt (= 0.0.43)'\n")])])]),a("h2",{attrs:{id:"安裝-vagrant-用-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安裝-vagrant-用-plugin"}},[t._v("#")]),t._v(" 安裝 Vagrant 用 Plugin")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("$ vagrant plugin install vagrant-libvirt\n$ sudo apt install qemu-kvm libvirt-clients libvirt-daemon-system bridge-utils virt-manager\n$ sudo adduser $USER libvirt\n$ sudo adduser $USER libvirt-qemu\n$ sudo service libvirttd restart     # sudo /etc/init.d/libvirtd restart\n")])])]),a("h1",{attrs:{id:"mac-osx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac-osx"}},[t._v("#")]),t._v(" Mac OSX")]),t._v(" "),a("p",[t._v("http://sourabhbajaj.com/mac-setup/Vagrant/README.html")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("brew cask install virtualbox\nbrew cask install virtualbox-extension-pack\n\n\nbrew cask install vagrant\nbrew cask install vagrant-manager\n\n\n brew cask rm virtualbox\n")])])]),a("h1",{attrs:{id:"vagrant-resource"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vagrant-resource"}},[t._v("#")]),t._v(" Vagrant Resource")]),t._v(" "),a("h2",{attrs:{id:"download-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-app"}},[t._v("#")]),t._v(" Download App")]),t._v(" "),a("p",[t._v("https://www.vagrantup.com/downloads.html")]),t._v(" "),a("h2",{attrs:{id:"find-box"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#find-box"}},[t._v("#")]),t._v(" Find Box")]),t._v(" "),a("p",[t._v("https://app.vagrantup.com/boxes/search")]),t._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),a("p",[t._v("https://www.vagrantup.com/intro/getting-started/index.html")]),t._v(" "),a("h1",{attrs:{id:"exercise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exercise"}},[t._v("#")]),t._v(" Exercise")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("$ vagrant init hashicorp/precise64\n$ vagrant up\nBringing machine 'default' up with 'virtualbox' provider...\n==> default: Box 'hashicorp/precise64' could not be found. Attempting to find and install...\n    default: Box Provider: virtualbox\n    default: Box Version: >= 0\n==> default: Loading metadata for box 'hashicorp/precise64'\n    default: URL: https://vagrantcloud.com/hashicorp/precise64\n==> default: Adding box 'hashicorp/precise64' (v1.1.0) for provider: virtualbox\n    default: Downloading: https://vagrantcloud.com/hashicorp/boxes/precise64/versions/1.1.0/providers/virtualbox.box\n    default: Download redirected to host: vagrantcloud-files-production.s3.amazonaws.com\n==> default: Successfully added box 'hashicorp/precise64' (v1.1.0) for 'virtualbox'!\n==> default: Importing base box 'hashicorp/precise64'...\n==> default: Matching MAC address for NAT networking...\n==> default: Checking if box 'hashicorp/precise64' version '1.1.0' is up to date...\n==> default: Setting the name of the VM: test-001_default_1555334147451_21236\nVagrant is currently configured to create VirtualBox synced folders with\nthe `SharedFoldersEnableSymlinksCreate` option enabled. If the Vagrant\nguest is not trusted, you may want to disable this option. For more\ninformation on this option, please refer to the VirtualBox manual:\n\n  https://www.virtualbox.org/manual/ch04.html#sharedfolders\n\nThis option can be disabled globally with an environment variable:\n\n  VAGRANT_DISABLE_VBOXSYMLINKCREATE=1\n\nor on a per folder basis within the Vagrantfile:\n\n  config.vm.synced_folder '/host/path', '/guest/path', SharedFoldersEnableSymlinksCreate: false\n==> default: Clearing any previously set network interfaces...\n==> default: Preparing network interfaces based on configuration...\n    default: Adapter 1: nat\n==> default: Forwarding ports...\n    default: 22 (guest) => 2222 (host) (adapter 1)\n==> default: Booting VM...\n==> default: Waiting for machine to boot. This may take a few minutes...\n    default: SSH address: 127.0.0.1:2222\n    default: SSH username: vagrant\n    default: SSH auth method: private key\n    default:\n    default: Vagrant insecure key detected. Vagrant will automatically replace\n    default: this with a newly generated keypair for better security.\n    default:\n    default: Inserting generated public key within guest...\n    default: Removing insecure key from the guest if it's present...\n    default: Key inserted! Disconnecting and reconnecting using new SSH key...\n==> default: Machine booted and ready!\n==> default: Checking for guest additions in VM...\n    default: The guest additions on this VM do not match the installed version of\n    default: VirtualBox! In most cases this is fine, but in rare cases it can\n    default: prevent things such as shared folders from working properly. If you see\n    default: shared folder errors, please make sure the guest additions within the\n    default: virtual machine match the version of VirtualBox you have installed on\n    default: your host and reload your VM.\n    default:\n    default: Guest Additions Version: 4.2.0\n    default: VirtualBox Version: 6.0\n==> default: Mounting shared folders...\n    default: /vagrant => /Users/alanjui/workspace/vagrant/test-001\n")])])]),a("p",[a("strong",[t._v("What boxes installed")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("vargant box list\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("Add the Vagrant box you want to use. We'll use Ubuntu 12.04 for the following example.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("$ vagrant box add precise64 http://files.vagrantup.com/precise64.box\n")])])]),a("p",[t._v("You can find more boxes at "),a("a",{attrs:{href:"https://vagrantcloud.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vagrant Cloud"),a("OutboundLink")],1),t._v("\nNow create a test directory and cd into the test directory. Then we'll initialize the vagrant machine.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("$ vagrant init precise64\n")])])]),a("p",[t._v("Now lets start the machine using the following command.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("$ vagrant up\n")])])]),a("p",[t._v("You can ssh into the machine now.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("$ vagrant ssh\n")])])]),a("p",[t._v("Halt the vagrant machine now.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("$ vagrant halt\n")])])]),a("p",[t._v("Other useful commands are "),a("code",[t._v("suspend")]),t._v(", "),a("code",[t._v("destroy")]),t._v(" etc.")]),t._v(" "),a("h2",{attrs:{id:"how-to-creating-vagrant-box"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-creating-vagrant-box"}},[t._v("#")]),t._v(" How to creating Vagrant Box")]),t._v(" "),a("p",[t._v("https://medium.com/@tonyeung85/creating-an-ubuntu-18-04-base-box-b5ff4c1022fd")]),t._v(" "),a("p",[t._v("https://app.vagrantup.com/peru/boxes/ubuntu-18.04-desktop-amd64")]),t._v(" "),a("h2",{attrs:{id:"centos-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-7"}},[t._v("#")]),t._v(" CentOS 7")]),t._v(" "),a("p",[t._v("https://app.vagrantup.com/centos/boxes/7")]),t._v(" "),a("p",[t._v("https://blog.centos.org/2019/02/updated-centos-vagrant-images-available-v1901-01/")]),t._v(" "),a("h2",{attrs:{id:"ubuntu-18-04"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-18-04"}},[t._v("#")]),t._v(" Ubuntu 18.04")]),t._v(" "),a("p",[t._v("https://app.vagrantup.com/peru/boxes/ubuntu-18.04-desktop-amd64")]),t._v(" "),a("p",[t._v("https://github.com/ruzickap/packer-templates/")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('Vagrant.configure("2") do |config|\n\n        config.vm.box = "peru/ubuntu-18.04-desktop-amd64"\n        config.vm.box_version = "20190515.01"\n\n        config.vm.provider "virtualbox" do |vb|\n                # Display the VirtualBox GUI when booting the machine\n                vb.gui = true\n\n                # Customize the amount of memory on the VM:\n                vb.memory = "1024"\n                vb.cpus = "4"\n\n                vb.name = "vm_ubuntu_1804"\n        end\n\n  # config.vm.provision "shell", inline: <<-SHELL\n  #   apt-get update\n  #   apt-get install -y apache2\n  # SHELL\n\nend\n\n\n\n# -*- mode: ruby -*-\n# vi: set ft=ruby :\n\n# All Vagrant configuration is done below. The "2" in Vagrant.configure\n# configures the configuration version (we support older styles for\n# backwards compatibility). Please don\'t change it unless you know what\n# you\'re doing.\nVagrant.configure("2") do |config|\n  # The most common configuration options are documented and commented below.\n  # For a complete reference, please see the online documentation at\n  # https://docs.vagrantup.com.\n\n  # Every Vagrant development environment requires a box. You can search for\n  # boxes at https://vagrantcloud.com/search.\n  config.vm.box = "centos/7"\n\n  # Disable automatic box update checking. If you disable this, then\n  # boxes will only be checked for updates when the user runs\n  # `vagrant box outdated`. This is not recommended.\n  # config.vm.box_check_update = false\n\n  # Create a forwarded port mapping which allows access to a specific port\n  # within the machine from a port on the host machine. In the example below,\n  # accessing "localhost:8080" will access port 80 on the guest machine.\n  # NOTE: This will enable public access to the opened port\n  # config.vm.network "forwarded_port", guest: 80, host: 8080\n\n  # Create a forwarded port mapping which allows access to a specific port\n  # within the machine from a port on the host machine and only allow access\n  # via 127.0.0.1 to disable public access\n  config.vm.network "forwarded_port", guest: 80, host: 8088, host_ip: "127.0.0.1"\n\n  # Create a private network, which allows host-only access to the machine\n  # using a specific IP.\n  config.vm.network "private_network", ip: "192.168.33.10"\n\n  # Create a public network, which generally matched to bridged network.\n  # Bridged networks make the machine appear as another physical device on\n  # your network.\n  config.vm.network "public_network", bridge: "enp5s0"\n\n  # Share an additional folder to the guest VM. The first argument is\n  # the path on the host to the actual folder. The second argument is\n  # the path on the guest to mount the folder. And the optional third\n  # argument is a set of non-required options.\n  config.vm.synced_folder "../data", "/vagrant_data"\n\n  # Provider-specific configuration so you can fine-tune various\n  # backing providers for Vagrant. These expose provider-specific options.\n  # Example for VirtualBox:\n  #\n  config.vm.provider "virtualbox" do |vb|\n          vb.name = "vm_centos_7"\n\n    # Display the VirtualBox GUI when booting the machine\n    vb.gui = true\n  \n    # Customize the amount of memory on the VM:\n    vb.memory = "2048"\n\n    vb.cpus = 4\n  end\n  #\n  # View the documentation for the provider you are using for more\n  # information on available options.\n\n  # Enable provisioning with a shell script. Additional provisioners such as\n  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the\n  # documentation for more information about their specific syntax and use.\n  config.vm.provision "shell", inline: <<-SHELL\n    yum install git\n    yum groupinstall "GNOME Desktop" "Graphical Administration Tools"\n    ln -sf /lib/systemd/system/runlevel5.target /etc/systemd/system/default.target\n  SHELL\n\nend\n')])])]),a("h1",{attrs:{id:"問題排除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#問題排除"}},[t._v("#")]),t._v(" 問題排除")]),t._v(" "),a("p",[a("strong",[t._v("完成 Vagrant 版本更新後，無法啟動 vagrant")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("/usr/local/bin/vagrant up\nVagrant failed to initialize at a very early stage:\n\nThe plugins failed to initialize correctly. This may be due to manual\nmodifications made within the Vagrant home directory. Vagrant can\nattempt to automatically correct this issue by running:\n\n  vagrant plugin repair\n\nIf Vagrant was recently updated, this error may be due to incompatible\nversions of dependencies. To fix this problem please remove and re-install\nall plugins. Vagrant can attempt to do this automatically by running:\n\n  vagrant plugin expunge --reinstall\n\nOr you may want to try updating the installed plugins to their latest\nversions:\n\n  vagrant plugin update\n\nError message given during initialization: Unable to resolve dependency: user requested 'vagrant-libvirt (= 0.0.45)'\n\nProcess finished with exit code 1\n")])])]),a("p",[a("strong",[t._v("無法安裝 Plugin: vagrant-libvirt")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Vagrant failed to properly resolve required dependencies. These\nerrors can commonly be caused by misconfigured plugin installations\nor transient network issues. The reported error is:\n\nERROR: Failed to build gem native extension.\n\n    current directory: /Users/alanjui/.vagrant.d/gems/2.4.9/gems/ruby-libvirt-0.7.1/ext/libvirt\n/opt/vagrant/embedded/bin/ruby -r ./siteconf20191111-26905-3i8dr8.rb extconf.rb\n*** extconf.rb failed ***\nCould not create Makefile due to some reason, probably lack of necessary\nlibraries and/or headers.  Check the mkmf.log file for more details.  You may\nneed configuration options.\n\nProvided configuration options:\n--with-opt-dir\n--with-opt-include\n--without-opt-include=${opt-dir}/include\n--with-opt-lib\n--without-opt-lib=${opt-dir}/lib\n--with-make-prog\n--without-make-prog\n--srcdir=.\n--curdir\n--ruby=/opt/vagrant/embedded/bin/$(RUBY_BASE_NAME)\n--with-libvirt-include\n--without-libvirt-include\n--with-libvirt-lib\n--without-libvirt-lib\n--with-libvirt-config\n--without-libvirt-config\n--with-pkg-config\n--without-pkg-config\nextconf.rb:73:in `<main>': libvirt library not found in default locations (RuntimeError)\n\nTo see why this extension failed to compile, please check the mkmf.log which can be found here:\n\n  /Users/alanjui/.vagrant.d/gems/2.4.9/extensions/x86_64-darwin-13/2.4.0/ruby-libvirt-0.7.1/mkmf.log\n\nextconf failed, exit code 1\n\nGem files will remain installed in /Users/alanjui/.vagrant.d/gems/2.4.9/gems/ruby-libvirt-0.7.1 for inspection.\nResults logged to /Users/alanjui/.vagrant.d/gems/2.4.9/extensions/x86_64-darwin-13/2.4.0/ruby-libvirt-0.7.1/gem_make.out\n\n\n\nalanjui@MBP-2018:~/workspace/Python/django_002 (master) \n$ NOKOGIRI_USE_SYSTEM_LIBRARIES=1 CONFIGURE_ARGS=\"with-libvirt-include=/usr/include/libvirt with-libvirt-lib=/usr/lib/libvirt\" vagrant plugin install vagrant-libvirt\nInstalling the 'vagrant-libvirt' plugin. This can take a few minutes...\nBuilding native extensions.  This could take a while...\nFetching: fog-libvirt-0.7.0.gem (100%)\nFetching: vagrant-libvirt-0.0.45.gem (100%)\nInstalled the plugin 'vagrant-libvirt (0.0.45)'!\n")])])])])}),[],!1,null,null,null);a.default=i.exports}}]);