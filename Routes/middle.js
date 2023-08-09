const express = require('express');

const router = express.Router();


const homecontroller = require('../Controllers/homep');

const activitescontroller = require('../Controllers/activites');

const aboutcontroller = require('../Controllers/about');

const projectcontroller = require('../Controllers/project');

router.get('/homepage',homecontroller.homepage);

router.get('/activites',activitescontroller.activites);

router.get('/about',aboutcontroller.about);

router.get('/project',projectcontroller.project);

module.exports = router;