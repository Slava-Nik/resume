const bem_selector = '^[a-zA-Z0-9/-]*(__[a-zA-Z0-9/-]+)?(--[a-zA-Z0-9/-]+)?$';

module.exports = {
  'plugins': [
    'stylelint-scss'
  ],
  'extends': 'stylelint-config-standard-scss',
  'rules': {
    'indentation': 2,
    'selector-class-pattern': bem_selector,
  }
};