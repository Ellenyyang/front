<template>
    <div>

        <div class="header">

        </div>
        <header class="site-header">

        </header>
        <main class="site-main">
            <div class="inner">
                <div class="list-write-wrap">
                    <div class="list-write-item">
                        <div class="form-wrap">
                            <div class="form-item">
                                <label for="" class="form-label">제목</label>
                                <input type="text" class="form-input" placeholder="제목을 입력해주세요." />
                            </div>
                            <div class="form-item">
                                <label for="" class="form-label">내용</label>
                                <textarea class="form-input form-input-md" placeholder="내용을 입력해주세요."></textarea>
                            </div>
                            <div class="form-item">
                                <label for="" class="form-label">이미지</label>
                                <input type="file"  class="form-input" placeholder="파일을 선택해주세요." />
                            </div>
                        </div>
                            
                    </div>
                </div>
                <div class="btn-controll-group btn-on-bottom">
                    <button type="button" class="btn btn-lg btn-secondary">목록으로</button>
                    <button type="button" class="btn btn-lg btn-primary">등록/저장</button>
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
  name: 'Update',
  data () {
    // return {}
  }
}
</script>