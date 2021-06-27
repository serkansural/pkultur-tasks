class QuestionService {
  constructor () {
    this.questionData = [
      [
        {
          id: 0,
          firstName: 'Juerg',
          lastName: 'Paulison',
          details: { age: 5 }
        },
        {
          id: 1,
          firstName: 'Peter',
          lastName: 'Mueller',
          details: { age: 5 }
        },
        {
          firstName: 'Manfred',
          lastName: 'Schneider',
          details: { age: 17 }
        },
        {
          id: 3,
          firstName: 'Hans',
          lastName: 'Mettmann',
          details: { age: 3 }
        },
        {
          firstName: 'Dieter',
          lastName: 'Schmitt'
        },
        {
          firstName: 'Klaudia',
          lastName: 'Meier',
          details: { age: 23 }
        }
      ],
      [
        {
          id: 0,
          firstName: 'Juerg',
          lastName: 'Paulison',
          details: { age: 5 }
        },
        {
          id: 1,
          firstName: 'Peter',
          lastName: 'Mueller',
          details: { age: 5 }
        },
        {
          id: 2,
          firstName: 'Manfred',
          lastName: 'Schneider',
          details: { age: 17 }
        },
        {
          id: 3,
          firstName: 'Hans',
          lastName: 'Mettmann',
          details: { age: 3 }
        },
        {
          id: 4,
          firstName: 'Dieter',
          lastName: 'Schmitt'
        },
        {
          id: 5,
          firstName: 'Klaudia',
          lastName: 'Meier',
          details: { age: 23 }
        }
      ],
      {
        id: 1,
        firstName: 'Peter',
        lastName: 'Mueller',
        details: { age: 5 },
        route: 'rainbowstreet 15',
        postal_code: 55112,
        route2: 'rainbowstreet 15',
        postal_code2: 55112,
        route3: 'rainbowstreet 15',
        postal_code3: 55112,
        route4: 'rainbowstreet 15',
        postal_code4: 55112,
        route5: 'rainbowstreet 15',
        postal_code5: 55112
      },
      [
        {
          id: 0,
          firstName: 'Juerg',
          lastName: 'Paulison',
          details: { age: 5 }
        },
        {
          id: 1,
          firstName: 'Peter',
          lastName: 'Mueller',
          details: { age: 5 }
        },
        {
          id: 2,
          firstName: 'Manfred',
          lastName: 'Schneider',
          details: { age: 17 }
        },
        {
          id: 3,
          firstName: 'Hans',
          lastName: 'Mettmann',
          details: { age: 3 }
        },
        {
          id: 4,
          firstName: 'Dieter',
          lastName: 'Schmitt'
        },
        {
          id: 5,
          firstName: 'Klaudia',
          lastName: 'Meier',
          details: { age: 23 }
        }
      ],
      {
        formObj: {
          locality: 'Istanbul',
          id: 13,
          firstName: 'Peter',
          lastName: 'Mueller',
          tnumber: '+492151123456',
          mnumber: '+49151987654',
          email: 'peter.mueller@gmail.com'
        },

        customers_database: [
          {
            customerId: 13,
            firstName: 'Peter',
            lastName: 'Mueller',
            tnumber: '+492151123456',
            mnumber: '+49151987654',
            email: 'peter.mueller@gmail.com'
          },
          {
            customerId: 14,
            firstName: 'Peter',
            lastName: 'Mueller',
            tnumber: '+492151123456',
            mnumber: '+49151987654',
            email: 'peter.mueller@gmail.com'
          }
        ],

        orders_database: [
          {
            locality: 'Istanbul',
            id: 1,
            customerId: 13
          },
          {
            locality: 'Istanbul',
            id: 2,
            customerId: 14
          }
        ]

      },
      {
        user_downtimes1: [
          {
            title: 'first',
            start_date: '2021-06-23',
            finish_date: '2021-06-30'
          },
          {
            title: 'second',
            start_date: '2021-07-02',
            finish_date: '2021-07-02'
          }
        ],
        user_downtimes2: [
          {
            title: 'first',
            start_date: '2021-06-23',
            finish_date: '2021-06-30'
          },
          {
            title: 'second',
            start_date: '2021-07-01',
            finish_date: '2021-07-02'
          }
        ],
        user_downtimes3: [
          {
            title: 'first',
            start_date: '2021-06-23',
            finish_date: '2021-06-30'
          },
          {
            title: 'second',
            start_date: '2021-06-30',
            finish_date: '2021-07-02'
          }
        ],
        test_case: [
          {
            title: 'first',
            start_date: '2021-06-19',
            finish_date: '2021-06-30'
          },
          {
            title: 'second',
            start_date: '2021-06-29',
            finish_date: '2021-07-02'
          },
          {
            title: 'third',
            start_date: '2021-07-01',
            finish_date: '2021-07-05'
          },
          {
            title: '4',
            start_date: '2021-07-20',
            finish_date: '2021-07-21'
          },
          {
            title: '5',
            start_date: '2021-07-22',
            finish_date: '2021-07-24'
          },
          {
            title: '5',
            start_date: '2021-07-23',
            finish_date: '2021-07-25'
          }
        ]
      },
      [
        {
          id: 0,
          firstName: 'Juerg',
          lastName: 'Paulison',
          details: { age: 5 }
        },
        {
          id: 1,
          firstName: 'Peter',
          lastName: 'Mueller',
          details: { age: 10 }
        }
      ]
    ]
  }

  GetData () {
    return this.questionData
  }
}

export default QuestionService
