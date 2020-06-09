<template>
    <div>
        


        <div class="header">

        </div>
        <header class="site-header">

        </header>
        <main class="site-main">
            <div class="inner">
                <div class="btn-controll-group btn-on-top" >
                    <button type="button" class="btn btn-md btn-primary">수정</button>
                    <button type="button" class="btn btn-md btn-danger">삭제</button>
                </div>
                <div class="list-view-wrap">
                    <div class="list-view-item">
                        <div class="list-view-item-header">
                            <p class="list-view-item__subject">리스트 제목입니다.</p>
                            <p class="list-view-item__date">2020-06-05</p>
                        </div>
                        <div class="list-view-item-body">
                            <p class="list-view-item__context">
                                리스트 내용 두 줄 출력입니다.리스트 내용 두 줄 출력입니다.리스트 내용 두 줄 출력입니다.
                                리스트 내용 두 줄 출력입니다.리스트 내용 두 줄 출력입니다.<br/>
                                리스트 내용 두 줄 출력입니다.리스트 내용 두 줄 출력입니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="btn-controll-group btn-on-bottom">
                    <button type="button" class="btn btn-lg btn-secondary">목록</button>
                </div>
            </div>
        </main>
        <footer class="site-footer">
            푸터
        </footer>

    </div>
</template>

<script>
// import data from '@/data'

export default {
  name: 'Detail',
  data () {
    // return {}
  }
}
</script>