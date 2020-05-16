const componentsFolder = "src/components/"
const pagesFolder = "src/pages/"
const metatagsFolder = "src/constants/metatags/"

module.exports = function (plop) {
  plop.setPartial("componentName", "{{ pascalCase name}}")

  plop.setGenerator("component", {
    description: "creates a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
      {
        type: "confirm",
        name: "shouldAddStyles",
        message: "Should add style",
        default: true,
      },
    ],
    actions: [
      {
        type: "add",
        path: `${componentsFolder}{{> componentName }}/{{> componentName}}.component.js`,
        templateFile: "plop-templates/component/component.hbs",
        skipIfExists: true,
      },
      {
        type: "add",
        path: `${componentsFolder}{{> componentName }}/{{> componentName }}.test.js`,
        templateFile: "plop-templates/component/componentTest.hbs",
        skipIfExists: true,
      },
      {
        type: "add",
        path: `${componentsFolder}{{> componentName }}/{{> componentName }}.styles.js`,
        templateFile: "plop-templates/component/componentStyles.hbs",
        skip({ shouldAddStyles }) {
          if (!shouldAddStyles) return "Styles skipped"
        },
        skipIfExists: true,
      },
      {
        type: "add",
        path: `${componentsFolder}{{> componentName }}/index.js`,
        templateFile: "plop-templates/component/componentIndex.hbs",
        skipIfExists: true,
      },
    ],
  })

  plop.setGenerator("page", {
    description: "creates a page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Page name",
      },
    ],
    actions: [
      {
        type: "add",
        path: `${pagesFolder}{{> componentName}}.js`,
        templateFile: "plop-templates/page/page.hbs",
      },
      {
        type: "add",
        path: `${pagesFolder}{{> componentName }}.test.js`,
        templateFile: "plop-templates/page/pageTest.hbs",
      },
      {
        type: "add",
        path: `${metatagsFolder}{{> componentName }}.js`,
        templateFile: "plop-templates/page/pageMetatags.hbs",
      },
    ],
  })
}
