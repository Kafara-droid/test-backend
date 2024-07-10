import express from 'express';
import { fizzbuzz } from './fizzbuzz';
import { isPalindrome } from './palindrome';
import { queryDatabase } from './database';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/fizzbuzz/:number', (req, res) => {
    const number = parseInt(req.params.number);
    const result = fizzbuzz(number);
    res.json({ result });
});

app.get('/palindrome/:string', (req, res) => {
    const str = req.params.string;
    const result = isPalindrome(str);
    res.json({ result });
});

app.get('/classic-cars-customers', async (req, res) => {
    try {
        const result = await queryDatabase();
        res.json(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
