## MVC 



                       ┌────────────┐       ┌────────┐      ┌─────────────┐            ┌─────────┐                    ┌───────┐
                       │  CLIENT    │       │ ROUTES │      │ CONTROLLER  │            │  MODEL  │                    │ VIEW  │
                       └────────────┘       └────────┘      └─────────────┘            └─────────┘                    └───────┘

                     ┌─────────────────┐                  ┌─────────────────┐
                     │                 │                  │                 │                               ┌─────────────────────────────┐
                     │                 │                  │                 │                               │                             │
                     │                 │       GET        │                 │            Request            │          HTML Home          │
                     │                 ├─────────────────►│                 ├──────────────────────────────►│                             │
                     │                 │                  │                 │                               │           INDEX             │
                     │      HOME       │                  │                 │◄──────────────────────────────┤       (list all shops)      │
                     │                 │                  │                 │              HTML             │                             │
      Home Page      │  ('/openbook')  │                  │    index.js     │                               └─────────────────────────────┘
                     │                 │                  │                 │
                     │                 │                  │                 │
                     │                 │                  │                 │
                     │                 │◄─────────────────┤                 │
                     │                 │     RESPONSE     │                 │          (database link)
                     │                 │                  │                 │findAll┌──────────────────┐
                     │                 │                  │                 ├──────▲│                  │     (user does not
                     │                 │                  │                 │▼──────┤       Shop.js    │      need to be signed
                     │                 │                  │                 │       │                  │      up to see lists)
                     └─────────────────┘                  └─────────────────┘       └──────────────────┘
                                                                             response





                        ┌────────────┐       ┌────────┐      ┌─────────────┐            ┌─────────┐                    ┌───────┐
                        │  CLIENT    │       │ ROUTES │      │ CONTROLLER  │            │  MODEL  │                    │ VIEW  │
                        └────────────┘       └────────┘      └─────────────┘            └─────────┘                    └───────┘

                      ┌─────────────────┐                  ┌─────────────────┐
                      │                 │                  │                 │                               ┌─────────────────────────────┐
                      │                 │                  │                 │                               │                             │
                      │                 │       GET        │                 │            Request            │          HTML Home          │
                      │     Users       ├─────────────────►│                 ├──────────────────────────────►│                             │
                      │                 │                  │                 │                               │           INDEX             │
                      │ ('/users/new')  │◄─────────────────┤                 │◄──────────────────────────────┤         (Lists all          │
        USERS         │                 │                  │                 │              HTML             │          the posts)         │
      (Sign up)       │                 │                  │  sessions.js    │                               └─────────────────────────────┘
                      │                 │                  │                 │
                      │                 │       POST       │                 │
                      │ complete form   ├─────────────────▲│                 │
                      │ & submit        │▼─────────────────┤                 │
                      │                 │     RESPONSE     │                 │          (database link)
                      │                 │                  │                 │create ┌──────────────────┐
                      │                 │                  │                 ├──────▲│                  │     (user needs to be
                      │                 │                  │                 │▼──────┤      User.js     │      signed up to post
                      │                 │                  │                 │       │                  │      or favourite a shop)
                      └─────────────────┘                  └─────────────────┘       └──────────────────┘
                                                                              response





                        ┌────────────┐       ┌────────┐        ┌─────────────┐            ┌─────────┐                  ┌───────┐
                        │  CLIENT    │       │ ROUTES │        │ CONTROLLER  │            │  MODEL  │                  │ VIEW  │
                        └────────────┘       └────────┘        └─────────────┘            └─────────┘                  └───────┘

                      ┌─────────────────┐                  ┌─────────────────┐
                      │                 │                  │                 │                               ┌─────────────────────────────┐
                      │                 │                  │                 │                               │                             │
                      │                 │                  │                 │            Request            │                             │
                      │                 ├───────GET───────►│                 ├──────────────────────────────►│                             │
                      │                 │                  │                 │                               │       HTML Sessions         │
                      │     Session     │◄────RESPONSE─────┤                 │◄──────────────────────────────┤                             │
       Sessions       │('/sessions/new')│                  │                 │              HTML             │                             │
      (log  in)       │                 │                  │   sessions.js   │                               └─────────────────────────────┘
                      │                 ├───────POST──────►│                 │
                      │                 │                  │                 │
                      │                 ◄◄────RESPONSE─────┤                 │
                      │                 │                  │                 │
                      │                 │     redirect/    │                 │          (database link)
                      │                 │   users/account  │                 │findOne┌──────────────────┐
                      │                 │                  │                 ├──────▲│                  │     (user needs to be
                      │                 │                  │                 │▼──────┤      User.js     │      signed up to post
                      │                 │                  │                 │       │                  │      or favourite a shop)
                      └─────────────────┘                  └─────────────────┘       └──────────────────┘
                                                                              response









                         ┌────────────┐       ┌────────┐        ┌─────────────┐            ┌─────────┐                  ┌───────┐
                         │  CLIENT    │       │ ROUTES │        │ CONTROLLER  │            │  MODEL  │                  │ VIEW  │
                         └────────────┘       └────────┘        └─────────────┘            └─────────┘                  └───────┘

                       ┌─────────────────┐                  ┌─────────────────┐
                       │                 │                  │                 │                               ┌─────────────────────────────┐
                       │                 │                  │                 │                               │                             │
                       │                 │                  │                 │            Request            │                             │
                       │                 ├───────GET───────►│                 ├──────────────────────────────►│           INDEX             │
                       │                 │                  │                 │                               │         (Lists all          │
                       │     Shops       │◄────RESPONSE─────┤                 │◄──────────────────────────────┤          the posts)         │
        Users area     │ ('/shops/new')  │                  │                 │              HTML             │                             │
                       │                 │                  │    shops.js     │                               └─────────────────────────────┘
                       │                 ├───────POST──────►│                 │
                       │                 │                  │                 │
                       │                 ◄◄────RESPONSE─────┤                 │
                       │                 │                  │                 │
                       │                 │     redirect/    │                 │          (database link)
                       │                 │   users/account  │                 │findOne┌──────────────────┐
                       │                 │                  │                 ├──────▲│                  │     (user needs to be
                       │                 │                  │                 │▼──────┤      User.js     │      signed up to post
                       │                 │                  │                 │       │                  │      or favourite a shop)
                       └─────────────────┘                  └──────────▲──┬───┘       └──────────────────┘
                                                                       │  │    response
                                                                       │  │
                                                                       │  │           ┌──────────────────┐
                                                                       │  └──────────►│                  │     findOne
                                                                       │              │       Shop.js    │     findMany
                                                                       └──────────────┤                  │     findAndModify
                                                                                      └──────────────────┘




