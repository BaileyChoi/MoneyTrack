import { createRouter, createWebHistory } from "vue-router";

import Header from "../components/Header/Header.vue";
import Login from "../components/User/Login.vue";
import FindId from '../components/User/FindId.vue';
import FindPw from '../components/User/FindPw.vue';
import Join from "../components/User/Join.vue";
import Mypage from '../components/User/Mypage.vue';
import Home from "../components/Home/Home.vue";
import Expense from "@/components/Expense/Expense.vue";
import ExpenseDetail from "@/components/ExpenseDetail/ExpenseDetail.vue";
import Statistics from "@/components/Statistics/Statistics.vue";
import ExpenseEdit from "@/components/ExpenseDetail/ExpenseEdit.vue";
import NotFound from '@/components/NotFound/NotFound.vue';
import Redirect from '@/components/Redirect/Redirect.vue';
import UiTest from "@/components/common/uiTest.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      //기본 home
      path: "/home",
      name: "home",
      components: {
        header: Header,
        default: Home,
      },
    },
    {
      //리다이렉팅
      path: "/redirect",
      name: "redirect",
      components: {
        header: Header,
        default: Redirect,
      },
    },
    {
      //로그인
      path: '/login',
      name: 'login',
      components: {
        header: Header,
        default: Login,
      },

    },
    {
      //아이디 찾기
      path: '/findId',
      name: 'findId',
      components: {
        header: Header,
        default: FindId,
      },
    },
    {
      //비밀번호 찾기
      path: '/findPw',
      name: 'findPw',
      components: {
        header: Header,
        default: FindPw,
      },
    },
    {
      //회원가입
      path: '/join',
      name: 'join',
      components: {
        header: Header,
        default: Join,
      },
    },
    {
      //마이페이지
      path: '/mypage',
      name: 'mypage',
      components: {
        header: Header,
        default: Mypage,
      },
    },
    {
      //지출&기록 페이지
      path: "/expense",
      name: "expense",
      components: {
        header: Header,
        default: Expense,
      },
    },
    {
      //지출 자세히
      path: "/expenseDetail/:id",
      name: "expenseDetail",
      components: {
        header: Header,
        default: ExpenseDetail,
      },
    },
    {
      //지출 자세히
      path: "/expenseEdit/:id",
      name: "expenseEdit",
      components: {
        header: Header,
        default: ExpenseEdit,
      },
    },
    {
      //통계
      path: "/statistics",
      name: "statistics",
      components: {
        header: Header,
        default: Statistics,
      },
    },
    {
      //에러페이지
      path: '/:pathMatch(.*)*', // 모든 경로에 매칭
      name: 'NotFound',
      components: {
        header: Header,
        default: NotFound,
      },
    },
    {
      // ui 테스트용
      path: "/uiTest",
      name: "uiTest",
      components: {
        header: Header,
        default: UiTest,
      },
    },
  ],
});

export default router;