import express from 'express'
import cors from 'cors'
import { db } from './db.js'

const app = express();

app.use(express.json())
app.use(cors())

const sortList = ({ filterOrder, search }) => {
    let sortedList = [...db];

    sortedList.sort((a, b) => parseInt(b.price.replace(/\s/g, '')) - parseInt(a.price.replace(/\s/g, '')));
    if (filterOrder && filterOrder === 'toHigh') { sortedList.reverse() }
    if (search) { sortedList = sortedList.filter((el) => el.name.toLowerCase().includes(search.toLowerCase())) }

    return sortedList
}

app.get('/aircrafts', (req, res) => {
    const { filterOrder, search } = req.query;
    res.json(sortList({filterOrder, search}))
});

app.get('/aircrafts/:aircraft_id', (req, res) => {
    const { aircraft_id } = req.params;
    res.json( db[parseInt(aircraft_id) - 1] )
})

app.listen(3001, () => {
    console.log('Server was started!')
});
