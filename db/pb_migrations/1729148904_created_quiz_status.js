/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "dzyusjxvxyisjpp",
    "created": "2024-10-17 07:08:24.943Z",
    "updated": "2024-10-17 07:08:24.943Z",
    "name": "quiz_status",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yupxik2c",
        "name": "status",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "JOINING",
            "PLAYING",
            "END_ROUND",
            "EVALUCATION",
            "SCORE_VIEWING",
            "END_QUIZ"
          ]
        }
      },
      {
        "system": false,
        "id": "1xqp3nis",
        "name": "current_question",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "26zr9qmqhwyuk7k",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dzyusjxvxyisjpp");

  return dao.deleteCollection(collection);
})
