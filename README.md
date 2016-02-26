# minimesos.org
This is the source repository for minimesos.org using [hugo](https://gohugo.io)

# Updating
No explicit build steps are required.
Updates are automatically deployed using on push.

# minimesos.org hugo theme

mavent and gradle are split into separate snippets, located under [partials](https://github.com/ContainerSolutions/minimesos.org/tree/master/themes/minimesos/layouts/partials).

Upon build, Hugo fetches latest version as specified in [index.html](https://github.com/ContainerSolutions/minimesos.org/blob/master/themes/minimesos/layouts/index.html) 
This variable is propagated into templates: 
 * download.html (latest release and documentation links)
 * maven.html (maven version snippet)
 * gradle.html (gradle version snippet)

