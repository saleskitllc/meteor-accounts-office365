/* eslint-disable */
Package.describe({
  name: 'ermlab:accounts-office365',
  version: '0.3.1',
  summary: 'Login service for Microsoft Office 365 accounts',
  git: 'https://github.com/lindoelio/meteor-accounts-office365',
  documentation: 'README.md',
});

Package.onUse(function(api) {
  api.versionsFrom('2.3');

  api.use('ecmascript');

  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);

  api.use('ermlab:office365-oauth@0.2.0');
  api.imply('ermlab:office365-oauth@0.2.0');

  api.use(['accounts-ui'], ['client', 'server'], { weak: true });
  api.addFiles('office365.js');
});
