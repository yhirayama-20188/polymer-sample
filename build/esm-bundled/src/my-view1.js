import{PolymerElement,html}from"./my-app.js";class MyView1 extends PolymerElement{static get template(){return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
      </style>

      <custom-card>
        <div class="circle">1.1</div>
        <h1><data-view></data-view></h1>
        <p>ナミビア北部、エトーシャ・パンと呼ばれる乾いたソーダ湖を中心に広がる22,270㎢のアフリカでも有数の名公園｡パンの外側に草原、深いブッシュがあり植生も変化に富み、殆どの動物を見ることができますが、レイヨウ類は種類も数も多く、南部特有のオリックスやスプリング・ボックも見られます｡野鳥も豊富で325種という記録も｡広い園内は時速60kmという速度制限があり、タイプの違う4ヶ所の快適な宿泊＆キャンピング設備があります｡自然の水場が多くあり、そこに集まる動物を観察したり、夜間、ライトアップして観察できるところもあります。</p>
      </custom-card>


      <custom-card>
        <div class="circle">1.2</div>
        <h1>概要</h1>
        <p>ナミビア北部、エトーシャ・パンと呼ばれる乾いたソーダ湖。</p>
        <p>22,270㎢のアフリカでも有数の名公園。</p>
        <p>パンの外側に草原、深いブッシュがあり植生も変化に富み、殆どの動物を見ることができる。</p>
        <p>レイヨウ類は種類も数も多く、南部特有のオリックスやスプリング・ボックも見られます。野鳥も豊富で325種という記録も。</p>
        <p>自然の水場が多くあり、そこに集まる動物を観察したり、夜間、ライトアップして観察できる。</p>
        <p>自分たちがレンタルした車で（時速60kmという速度制限あり）、公園が空いている日の出から日の入りまで自由に動物たちを見放題。</p>
        <p>広い園内は、タイプの違う4ヶ所の快適な宿泊＆キャンピング設備があります｡</p>
        <custom-button
            button-text="参考1"
            button-type="button"><a href="https://www.dososhin.com/know/park/00025_etosha/"></a></custom-button>
      </custom-card>

      <custom-card>
        <image-card bg-image="https://www.his-j.com/smp/test/images/Namib_Desert04.jpg">
          <p style="color: #fff; padding-left: 1vw;">ナミブ砂漠</p>
        </imgae-card>
      </custom-card>

      <image-card bg-image="https://www.his-j.com/smp/test/images/Namib_Desert03.jpg">
        <custom-card>
          <div class="circle">1.2</div>
          <h1>View One-2</h1>
          <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
          <custom-button
            button-text="Click Me!"
            button-type="button"></custom-button>
        </custom-card>
      </imgae-card>
    `}}window.customElements.define("my-view1",MyView1);