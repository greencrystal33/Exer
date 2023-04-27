{{each data}}
      <div class="news-item">
        <img class="thumb" src="{{'http://www.liulongbin.top:3006' + $value.img}}" alt="" />
        <div class="right-box">
          <h1 class="title">{{$value.title}}</h1>
          <div class="tags">
            {{each $value.tags}}
            <span>{{$value}}</span>
            {{/each}}
          </div>
          <div class="footer">
            <div>
              <span>{{$value.source}}</span>&nbsp;&nbsp;
              <span>{{$value.time | dateFormat}}</span>
            </div>
            <span>评论数：{{$value.cmtcount}}</span>
          </div>
        </div>
      </div>
      {{/each}}