# PostgreSQL
## How to log into database within Docker
- Click "containers" icon in left nav bar
- Open drop down for "fec"
- Click "shopping-db"
- Select "Terminal" at top of screen
  1. Type "psql -U postgres" at the # prompt
  2. Prompt changes to "postgres=#"
  3. Type "\c shopping" to connect to the shopping database
  4. Prompt changes to "shopping=#"
  5. Type "\dt" to verify tables exist
  6. Type "\d sizes" to verify that table sizes was created and is programmed
  7. Type "SELECT * FROM sizes" to verify if data is in table


## PostegreSQL Tips
- \l = list databases
- \q = quit
- \dt = list all tables
- \d tableName = list info for tableName