# Android module

This library no longer uses Gradle's deprecated **`maven`** plugin or the `installArchives` task.
Artifacts are consumed via **npm** like any other React Native dependency.

## Tooling

- Requires **Gradle 7+** and **Android Gradle Plugin (AGP) 7+** (AGP 8 supported).
- The module defines a `namespace` as required by AGP 8.
- Default SDK versions (overrideable from the host app via `rootProject.ext`):
  - `compileSdkVersion`: 34
  - `targetSdkVersion`: 34
  - `minSdkVersion`: 21 (projects can raise this to 23+)

## Publishing to a Maven repository (optional)

If you still need to publish this module to a Maven repository, migrate to **`maven-publish`**:

```gradle
apply plugin: 'maven-publish'

publishing {
  publications {
    release(MavenPublication) {
      from components.release
    }
  }
}
```
