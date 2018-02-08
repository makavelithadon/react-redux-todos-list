import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { readFile, writeFile } from 'fs';
import { promisify } from "util";

const pReadFile = promisify(readFile);
const pWriteFile = promisify(writeFile);

const port = 8882;
const app = express();

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

const toJSON = string => JSON.parse(string);

const toText = json => JSON.stringify(json, null, 2);

const todosPath = `${__dirname}/todos.json`

// create application/json parser
app.use(bodyParser.json())

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors(corsOptions));

const readTodos = async () => {
  let todos = await pReadFile(todosPath, 'utf-8');
  todos = !todos
    ? JSON.stringify([])
    : todos;
  return toJSON(todos);
}

const saveTodos = newTodos => {
  return pWriteFile(todosPath, toText(newTodos));
}

// routes

app.get('/todos', async (req, res) => {
  try {
    let todos = await pReadFile(todosPath, 'utf-8');
    todos = toJSON(todos);
    res.send({ error: 0, todos });
  } catch (err) {
    res.send({ error: 1, message: err.toString() });
  }
})

app.post('/todo', async (req, res) => {
  try {
    const { todo } = req.body;
    const todos = await readTodos();
    const newTodos = [ ...todos, todo ];
    await saveTodos(newTodos);
    res.send({ error: 0, message: 'Todo was saved succesfully.', todos: newTodos }); 
  } catch (err) {
    res.send({ error: 1, message: err.toString() });
  } 
})

app.post('/todos', async (req, res) => {
  try {
    const { todos } = req.body;
    await saveTodos(todos);
    res.send({ error: 0, message: 'Todos was saved succesfully.', todos });
  } catch (err) {
    res.send({ error: 1, message: err.toString() });
  }
})

app.listen(port, () => {
  console.log('Listening on port %d', port);
})
