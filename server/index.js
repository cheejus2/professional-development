const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(express.json());
app.use(cors());

const db = require('./models');

const authRouter = require('./routes/Auth');
app.use('/auth', authRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'static/index.html'))
})

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server runing on port 3001');
    })
});
