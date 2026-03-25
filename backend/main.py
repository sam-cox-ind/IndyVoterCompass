from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# front end talking to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # tighten later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Backend is running"}

@app.get("/election-data")
def get_election_data():
    return {
        "year": 2020,
        "state": "Indiana",
        "results": [
            {"candidate": "Democrat", "votes": 1242416},
            {"candidate": "Republican", "votes": 1729516}
        ]
    }