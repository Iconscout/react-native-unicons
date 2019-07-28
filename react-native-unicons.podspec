require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-unicons"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                  react-native-unicons
                   DESC
  s.homepage     = "https://github.com/Iconscout/react-native-unicons"
  s.license      = "MIT"
  # s.license    = { :type => "MIT", :file => "FILE_LICENSE" }
  s.authors      = { "Tarun Mangukiya" => "tarunmangukiya@hotmail.com" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/Iconscout/react-native-unicons.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m,swift}"
  s.requires_arc = true

  s.dependency "React"
	
  # s.dependency "..."
end

