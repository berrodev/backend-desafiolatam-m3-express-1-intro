
# Veterinaries API



## Installation

Install vets API with npm

```bash
  npm install
  npm run dev
```

Run Postgresql Database Script
```http
../src/database/scripts/script.sql
```
    

## SwaggerDocs
```http
  /api/v1/docs
```

## API Reference

#### Get all vets

```http
  GET /api/v1/vets
```

#### Get vet

```http
  GET /api/v1/vets/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of vet to fetch |

#### Post vet

```http
  POST /api/v1/vets/
```

| Body Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of vet to post |
| `address`      | `string` | **Required**. Address of vet to post |
| `phone`      | `string` | **Required**. Phone of vet to post |

#### Delete vet

```http
  DELETE /api/v1/vets/${id}
```

| Body Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `integer` | **Required**. Id of vet to delete |

#### Edit vet

```http
  Put /api/v1/vets/${id}
```

| Body Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Id of vet to edit |
| `address`      | `string` | **Required**. address of vet to edit |
| `phone`      | `string` | **Required**. phone of vet to edit |
