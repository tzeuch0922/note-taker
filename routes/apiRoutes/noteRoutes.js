const notes = require('../../db/db.json');
const router = require('express').Router();
const note = require('../../lib/notes.js');

router.get('/notes', (req, res) =>
{
    let val = notes;
    if(val)
    {
        res.json(val);
        return;
    }
    res.json({});
});

router.post('/notes', (req, res) =>
{
    res.json(note.createNote(req.body, notes));
});

module.exports = router;