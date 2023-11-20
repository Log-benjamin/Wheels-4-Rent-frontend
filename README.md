<a name="readme-top"></a>

<div align="center">
<img  src='./app/assets/images/9296454.gif' width="300px">
  <h1><b>Wheels-4-Rent</b></h1>

</div>

# Backend

<!-- TABLE OF CONTENTS -->

## 📗 Table of Contents

- [📖 About the Project ](#-Wheels-4-Rent-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🔗 Link for the Frontend](#frontend)
  - [🔗 API Documentations](#APIDoc)
  - [🔗 Kanban Board](#kanban)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
  - [👥 Author ](#-author-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 Wheels-4-Rent <a name="about-project"></a>

**Wheels-4-Rent** An application programming interface (API) tailored for car rental services streamlines the integration of rental functionalities into various applications or systems. It empowers users to execute essential tasks associated with vehicle rental, including reservation and inventory management.
## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Server</summary>
    <li><a href="https://www.ruby-lang.org/en/">Ruby</a></li>
    <li><a href="https://rubyonrails.org/">Rails</a></li>
</details>
<details>
<summary>Test</summary>
    <li><a href="https://rspec.info/">Rspec</a></li>
</details>
<details>
  <summary>Database</summary>
    <li><a href="https://www.postgresql.org/">Postgres</a></li>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **User Registraton**
- **Add Car**
- **Delete Car**
- **Show all Cars**
- **Show detail Info of a Car**
- **Make Reservations**
- **Cancel Reservation**
- **Show all Reservation**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FRONTEND -->
## 🔗 Link for the Frontend <a name="frontend"></a>

- [Wheels-4-Rent Frontend](https://github.com/Log-benjamin/Wheels-4-Rent-frontend)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- APIDoc -->

## 🔗 Link for the API Documentations <a name="APIDoc"></a>

- open the server in localhost:3000 first
- [http://localhost:3000/api-docs/](http://localhost:3000/api-docs/)

<!-- KANBAN -->

## 🔗 Kanban Board <a name="kanban"></a>
- [Kanban Board](https://github.com/Log-benjamin/Wheels-4-Rent-backend/projects/1)
- [Initial Kanban Board](https://user-images.githubusercontent.com/97245616/281423098-fc50c624-f431-4dc6-8c29-a20a40f49d19.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

```
    ruby >= 3.2.0
    rails >= 7.0
    postgres >- 15.3
```

### Setup

Clone this repository to your desired folder:

```bash
  git clone https://github.com/Log-benjamin/Wheels-4-Rent-backend
```

You need to setup database for these project

```
  development = Wheels-4-Rent_dev
  test        = Wheels-4-Rent_test
  production  = Wheels-4-Rent_prod
```

or you can use your own database and change the ```config/database.yml```

```yml
  default: &default
    adapter: postgresql
    encoding: unicode
    pool: 5
    username: [your_username]
    password: [your_password]
    host: localhost

  development:
    <<: *default
    database: [your_database_for_development]

  test:
    <<: *default
    database: [your_database_for_test]

  production:
    <<: *default
    database: [your_database_for_production]
```

### Install

Install this project with:

```bash
  cd Wheels-4-Rent
  bundle install
```

it will install the required gemfile for running the project

### Usage

create the database, run migration, and seed files:

```bash
   rails db:create
   rails db:migrate
   rails db:seed
```

## Makesure the backend is running on ```localhost:3000```


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 👥 Author <a name="author"></a>

👤 **Emmanuel Kipngeno**

 <ul>
    <li>
      <a href="https://github.com/kkmanuu">
      <img width="16px" src="https://upload.wikimedia.org/wikipedia/commons/2/24/Github_logo_svg.svg" alt="github logo" />
      <b>@Emmanuel Kipngeno</b>
      </a>
    </li>
    <li>
      <a href="https://twitter.com/Kkmanuu1">
      <img width="16px" src="https://ik.imagekit.io/dqd3uh1at/x-new-logo.svg?updatedAt=1697475085598" alt="x logo" />
      <b>@Emmanuel Kipngeno<</b>
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/emmanuel-kipngeno/">
      <img width="16px" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="linkedin logo" />
      <b>@Emmanuel Kipngeno</b>
      </a>
    </li>
  </ul>
<br />

👤 **Log-benjamin**

 <ul>
    <li>
      <a href="https://github.com/Log-benjamin">
      <img width="16px" src="https://upload.wikimedia.org/wikipedia/commons/2/24/Github_logo_svg.svg" alt="github logo" />
      <b>@binyam tegene</b>
      </a>
    </li>
    <li>
      <a href="https://twitter.com/@binyam_tegene">
      <img width="16px" src="https://ik.imagekit.io/dqd3uh1at/x-new-logo.svg?updatedAt=1697475085598" alt="x logo" />
      <b>@binyam tegene</b>
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/binyam-tegene-4b77ab265">
      <img width="16px" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="linkedin logo" />
      <b>@binyam tegene</b>
      </a>
    </li>
  </ul>
<br />


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- **Add additional Models for more functionality**
- **Deploy the app so it can be accessible to anyone.**


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Log-benjamin/Wheels-4-Rent-backend/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you find Wheels-4Rent valuable, please consider sharing it with your acquaintances or network. Your support in sharing this project would be greatly appreciated.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

This project's design is inspired by the work of [Murat Korkmaz](https://www.behance.net/muratk) on [Behance](https://www.behance.net/).Therefore, we express our gratitude to [Murat Korkmaz](https://www.behance.net/muratk) for the inspiring design that contributes to the visual appeal of Wheels-4-Rent.

We also would like to thank Micorverse Support team, Reviwers and Community for this learning oppprtunity.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>