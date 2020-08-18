import Polynomial from '@/views/Polynomial.vue';
import Algebra from '@/views/Algebra.vue';
import GoogleMap from '../views/GoogleMap.vue';

const routers = [{
  path: '/google-map',
  name: 'GoogleMap',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: GoogleMap,
}, {
  path: '/polynomial',
  name: 'Polynomial',
  component: Polynomial,
},
{
  path: '/algebra',
  name: 'Algebra',
  component: Algebra,
}];

export default routers;
