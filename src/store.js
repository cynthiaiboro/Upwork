import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    cards: [{
      id: 1,
      title: 'Web, Mobile & Software Dev',
      description:'Again, the reason we are committing a mutation instead of changing store.state.count directly, is because we want to explicitly track it. This simple convention makes your intention more explicit, so that you can reason about state changes in your app better when reading the code. In addition, this gives us the opportunity to implement tools that can log every mutation, take state snapshots, or even perform time travel debugging.',
      image:'https://assets.static-upwork.com/assets/Adquiro/99f1b87/wp/images/development@2x.29e32cef0ea0.svg',
    },
    {
      id: 2,
      title: 'Design & Creative',
      description:'Again, the reason we are committing a mutation instead of changing store.state.count directly, is because we want to explicitly track it. This simple convention makes your intention more explicit, so that you can reason about state changes in your app better when reading the code. In addition, this gives us the opportunity to implement tools that can log every mutation, take state snapshots, or even perform time travel debugging.',
      image:'https://assets.static-upwork.com/assets/Adquiro/99f1b87/wp/images/design-creative@2x.109353b3474a.svg',
    },
    {
      id: 3,
      title: 'Writing',
      description:'Again, the reason we are committing a mutation instead of changing store.state.count directly, is because we want to explicitly track it. This simple convention makes your intention more explicit, so that you can reason about state changes in your app better when reading the code. In addition, this gives us the opportunity to implement tools that can log every mutation, take state snapshots, or even perform time travel debugging.',
      image:'https://assets.static-upwork.com/assets/Adquiro/99f1b87/wp/images/writing@2x.1b7ea27c96c3.svg',
    },
    {
      id: 4,
      title: 'Sales & Marketing',
      description:'Again, the reason we are committing a mutation instead of changing store.state.count directly, is because we want to explicitly track it. This simple convention makes your intention more explicit, so that you can reason about state changes in your app better when reading the code. In addition, this gives us the opportunity to implement tools that can log every mutation, take state snapshots, or even perform time travel debugging.',
      image:'https://assets.static-upwork.com/assets/Adquiro/99f1b87/wp/images/marketing-sales@2x.ebb7dd9ca8bc.svg',
    },
    {
      id: 5,
      title: 'Admin Support',
      description:'Again, the reason we are committing a mutation instead of changing store.state.count directly, is because we want to explicitly track it. This simple convention makes your intention more explicit, so that you can reason about state changes in your app better when reading the code. In addition, this gives us the opportunity to implement tools that can log every mutation, take state snapshots, or even perform time travel debugging.',
      image:'https://assets.static-upwork.com/assets/Adquiro/99f1b87/wp/images/admin-support@2x.ff2e0d4dc35d.svg',
    },
    {
      id: 6,
      title: 'Customer Service',
      description:'Again, the reason we are committing a mutation instead of changing store.state.count directly, is because we want to explicitly track it. This simple convention makes your intention more explicit, so that you can reason about state changes in your app better when reading the code. In addition, this gives us the opportunity to implement tools that can log every mutation, take state snapshots, or even perform time travel debugging.',
      image:'https://assets.static-upwork.com/assets/Adquiro/99f1b87/wp/images/customer-service@2x.22b35df5315c.svg',
    },
    {
      id: 7,
      title: 'Data Science & Analytics',
      description:'Again, the reason we are committing a mutation instead of changing store.state.count directly, is because we want to explicitly track it. This simple convention makes your intention more explicit, so that you can reason about state changes in your app better when reading the code. In addition, this gives us the opportunity to implement tools that can log every mutation, take state snapshots, or even perform time travel debugging.',
      image:'https://assets.static-upwork.com/assets/Adquiro/99f1b87/wp/images/data-science@2x.b4305128dde6.svg',
    },
    {
      id: 8,
      title: 'Engineering & Architecture',
      description:'Again, the reason we are committing a mutation instead of changing store.state.count directly, is because we want to explicitly track it. This simple convention makes your intention more explicit, so that you can reason about state changes in your app better when reading the code. In addition, this gives us the opportunity to implement tools that can log every mutation, take state snapshots, or even perform time travel debugging.',
      image:'https://assets.static-upwork.com/assets/Adquiro/99f1b87/wp/images/engineering-architecture@2x.85b023c99e9f.svg',
    } 
  ]
  }
})