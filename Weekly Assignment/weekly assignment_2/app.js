const path = require('path');

const {app} = require('./utils/init-app')();

const viewRouter = require('./viewRouter');
const Service = require('./service/service');
const Router = require('./router/router');

const noteService = new Router(new Service(path.join(__dirname,"./stores/note.json")));

app.use('/', new viewRouter().router());
app.use('/api/note', noteService.router());

app.listen(8080, () => {
    console.log('Im running!!');
})