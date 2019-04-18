new Vue({
    el: '#facts',
    data: {
        factsContent: [
            {id: 0, crestURL: './img/crest-01.svg', textContent: 'Sarajevska pivara osnovana je 1864. godine, a prvo točenje piva, kako je zabilježeno, bilo je svečano. "U hladovitom šljiviku, u dolini više pivare, po prostrtim ćilimima poredani su bili oko okrugle sofre, pokrivene svakim mezetlucima, jastuci i dušeci za odlične goste, a kraj potočića u dnu šljivika okretali su se na ražnju pretili janjci." Evo, i 155 godina kasnije, mezimo uz sarajevsko.' },
            {id: 1, crestURL: './img/crest-02.svg', textContent: 'Sarajevsko kuhamo s vodom iz vlastitog izvora jer, ispod sarajevske pivare, na dubini od 297 m, jedan je od najboljih bh. Izvora vode. Sarajevska pivara je jedina u BiH, i jedna od malobrojnih u Evropi, koja posjeduje vlastiti izvor vode. Ova voda ima povišenu temperaturu u rasponu od 13 do 14,9°C što joj daje karakter termalne vode.' },
            {id: 2, crestURL: './img/crest-03.svg', textContent: 'Godine 1907. sarajevska pivara je bila najveća u austro-ugarskoj monarhiji, 1923. bila je ekskluzivni dobavljač kraljevskog dvora. Tada se kuhalo „dvorsko pivo“.' },
            {id: 3, crestURL: './img/crest-04.svg', textContent: 'Sarajevska pivara nikada, u 155 godina svoje historije, nije prestajala sa proizvodnjom piva. Kroz historiju, kuhano je dvorsko, crno, pšenično, zimsko, olimpik, trebevićko, jahorinsko, višesladno i druga piva…' },
            {id: 4, crestURL: './img/crest-05.png', textContent: 'Sarajevska pivara jedina je europska pivara čija je proizvodnja bila kontinuirana i tokom otomanskog carstva, kao i tokom austro-ugarske monarhije. Historičari je smatraju najstarijom fabrikom u BiH.' },
            {id: 5, crestURL: './img/crest-06.png', textContent: 'Sarajevsko se proizvodi u starom dijelu Sarajeva, u zgradi koja je zaštićeni historijski objekt. Tu se nalazi i pivnica HS, nasljednik kultne gradske pivnice poznate pod imenom „kod sameka“, koja je otvorena početkom 20. stoljeća. Ta pivnica je sve do 1992. godine bila poznato okupljalište sarajevskih umjetnika i simbol sarajevske kulturne scene. Uz sarajevsko su tu ispisani mnogi stihovi.' },
        ],
        currentFact: {},
        timer: '' 
    },
    methods: {
        start: function start(){
            var queryString = this.getParameterByName('slide');
            this.currentFact = this.factsContent[Math.floor(Math.random() * 6)];
            if (queryString && queryString >= 0 && queryString < 6) {
                this.currentFact = this.factsContent[queryString];
            } else {
                this.currentFact = this.factsContent[Math.floor(Math.random() * 6)];
            }
        },

        nextFact: function (event){
            // event.preventDefault();
            var id = this.currentFact.id;
            if (id === 5) {
                this.currentFact = this.factsContent[0];
            } else {
                id++;
                this.currentFact = this.factsContent[id];
            }
            this.cancelAutoUpdate();
            this.startAutoUpdate();
        },

        prevFact: function (event){
            event.preventDefault();
            var id = this.currentFact.id;
            if (id === 0) {
                this.currentFact = this.factsContent[5];
            } else {
                id--;
                this.currentFact = this.factsContent[id];
            }
            this.cancelAutoUpdate();
            this.startAutoUpdate();
        },
        getParameterByName: function (name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        },
        startAutoUpdate: function() {
            var self = this;
            this.timer = setInterval(function() {
                self.nextFact(); 
            }, 8000);
        },
        cancelAutoUpdate: function() { 
            clearInterval(this.timer);
            this.timer = '';
        }
    },
    created: function() {
        this.start();
        this.startAutoUpdate();
    }

})

function preloadImage(url)
{
    var img=new Image();
    img.src=url;
}

preloadImage('./img/crest-01.svg');
preloadImage('./img/crest-02.svg');
preloadImage('./img/crest-03.svg');
preloadImage('./img/crest-04.svg');
preloadImage('./img/crest-05.png');
preloadImage('./img/crest-06.png');