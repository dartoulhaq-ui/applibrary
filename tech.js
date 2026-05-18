        document.getElementById('year').textContent = new Date().getFullYear();
        //Banner Slide
        let bannerIndex = 0;
        const bannerSlider = document.getElementById('banner-slider');
        const bannerImages = bannerSlider.children;
        const totalBanners = bannerImages.length;

        function slideBanner() {
            bannerIndex = (bannerIndex + 1) % totalBanners;
            bannerSlider.style.transform = `translateX(-${bannerIndex * 100}%)`;
        }
        setInterval(slideBanner, 2500); 
        const appsData = [
            {
                id: 1,
                name: "GTA Vice Cty",
                badge: "Open World Roleplay",
                size: "3.2 GB",
                desc: "Grand Theft Auto penuh Story Romansa",
                category: "Game",
                rating:  4.1,
                iconUrl: "media/gtavice.png",
                basicLink: "https://safefileku.com/download/X2deRxGQwkGkZsKs",
                vipLink: "http://lynk.id/imde/x6dqrrzrmg5d/checkout"
            },
            {
                id: 2,
                name: "PPSSPP Gold",
                badge: "Emulator PlayStation Game",
                size: "32 MB",
                desc:"Tempatnya Game PS dengan render lebih ringan dan stabil",
                category: "App",
                rating: 4.8,
                iconUrl: "media/psgold.png",
                basicLink: "https://safefileku.com/download/gtSBaHDv93ByF0mn",
                vipLink: "http://lynk.id/imde/ym3dxjqe9dp8/checkout"
            },
            {
                id: 3,
                name: "Shaders PPSSPP Pack",
                badge: "Add On Graphic",
                size: "1.4 MB",
                desc: "Add on 4K HD Grafik,tanpa Lag.",
                category: "Tools",
                rating: 4.4,
                iconUrl: "media/shadersps.jpg",
                basicLink: "https://link-target.net/5709170/5es3xjprjvwc",
                vipLink: "https://lynk.id/imde/5mk4we3er1ln/checkout"
            },
            {
                id: 4,
                name: "Toy Story 3 PS",
                badge: "Adventure Game",
                size: "194 MB",
                desc:"Game dari Disney dengan konsep gamrplay PlayStation 3.",
                category: "Game",
                rating: 4.5,
                iconUrl: "media/toystory.jpg",
                basicLink: "https://safefileku.com/download/KwwM7LuPykNyTQwh",
                vipLink: "http://lynk.id/imde/77p19pj5q3oy/checkout"
            },
            {
                id: 5,
                name: "GTA Liberty PS",
                badge: "RPG Open World",
                size: "475 MB",
                desc:"Grand Theft Auto spesial series dari Rockstar North",
                category: "Game",
                rating: 3.9,
                iconUrl: "media/gtaliberty.jpg",
                basicLink: "https://safefileku.com/download/7dwNS7EE098CwTkX",
                vipLink: "http://lynk.id/imde/yvlpjzkejj2m/checkout"
            },
            {
                id: 6,
                name: "Naruto Ultimate Ninja Storm",
                badge: "Anime RPG",
                size: "3.1 GB",
                desc:"Game Anime Naruto Shippuden seru dengan grafis HD dan story yang menarik",
                category: "Game",
                rating: 4.9,
                iconUrl: "media/ninjastorm.jpg",
                basicLink: "https://safefileku.com/download/Uqx9PGx3HTvvF8ow",
                vipLink: "http://lynk.id/imde/gl3rk3qgz9pz/checkout"
            },
            {
                id: 7,
                name: "KineMaster New",
                badge: "Top Rated",
                size: "180 MB",
                desc: "Aplikasi Editing Terlengkap & The best.",
                category: "App",
                rating: 4.5,
                iconUrl: "media/kinmastr.jpg",
                basicLink: "https://safefileku.com/download/MwJFQzOfWJa4RPtJ",
                vipLink: "http://lynk.id/imde/xjxew8lg21ev/checkout"
            },
            {
                id: 8,
                name: "FNAF 4",
                badge: "Most Download",
                size: "71 MB",
                desc: "Five Night at's Freddy series ke -4",
                category: "Game",
                rating: 4.0,
                iconUrl: "https://ui-avatars.com/api/?name=PM&background=4ECDC4&color=fff&rounded=true&size=128",
                basicLink: "https://lynk.id/your_link_basic_7",
                vipLink: "https://t.me/your_telegram_7"
            },
            //
            {
                id: 9,
                name: "NFS Most-Wanted",
                badge: "Racing Offline",
                size: "390 MB",
                desc: "1st Need For Speed Old Era",
                category: "Game",
                rating: 4.8,
                iconUrl: "media/nfsmost.jpg",
                basicLink: "http://lynk.id/imde/jokr5jjvpwrm/checkout",
                vipLink: "http://lynk.id/imde/jokr5jjvpwrm/checkout"
            },
            {
                id: 10,
                name: "C0C",
                badge: "Viral!!!",
                size: "189 MB",
                desc: "Based Strategy&War Clan",
                category: "Game",
                rating: 4.2,
                iconUrl: "https://ui-avatars.com/api/?name=PM&background=4ECDC4&color=fff&rounded=true&size=128",
                basicLink: "https://lynk.id/your_link_basic_7",
                vipLink: "https://t.me/your_telegram_7"
            },
            {
                id: 11,
                name: "N",
                badge: "Viral!!!/Most Download/Top Rated",
                size: "1 MB",
                desc: "Desk",
                category: "Game/App/Tools/Trend",
                rating: 5,
                iconUrl: "https://ui-avatars.com/api/?name=PM&background=4ECDC4&color=fff&rounded=true&size=128",
                basicLink: "https://lynk.id/your_link_basic_7",
                vipLink: "https://t.me/your_telegram_7"
            },
            {
                id: 12,
                name: "N",
                badge: "Viral!!!/Most Download/Top Rated",
                size: "1 MB",
                desc: "Desk",
                category: "Game/App/Tools/Trend",
                rating: 5,
                iconUrl: "https://ui-avatars.com/api/?name=PM&background=4ECDC4&color=fff&rounded=true&size=128",
                basicLink: "https://lynk.id/your_link_basic_7",
                vipLink: "https://t.me/your_telegram_7"
            },
            {
                id: 13,
                name: "N",
                badge: "Viral!!!/Most Download/Top Rated",
                size: "1 MB",
                desc: "Desk",
                category: "Game/App/Tools/Trend",
                rating: 5,
                iconUrl: "https://ui-avatars.com/api/?name=PM&background=4ECDC4&color=fff&rounded=true&size=128",
                basicLink: "https://lynk.id/your_link_basic_7",
                vipLink: "https://t.me/your_telegram_7"
            },
            {
                id: 14,
                name: "N",
                badge: "Viral!!!/Most Download/Top Rated",
                size: "1 MB",
                desc: "Desk",
                category: "Game/App/Tools/Trend",
                rating: 5,
                iconUrl: "https://ui-avatars.com/api/?name=PM&background=4ECDC4&color=fff&rounded=true&size=128",
                basicLink: "https://lynk.id/your_link_basic_7",
                vipLink: "https://t.me/your_telegram_7"
            },
            {
                id: 15,
                name: "N",
                badge: "Viral!!!/Most Download/Top Rated",
                size: "1 MB",
                desc: "Desk",
                category: "Game/App/Tools/Trend",
                rating: 5,
                iconUrl: "https://ui-avatars.com/api/?name=PM&background=4ECDC4&color=fff&rounded=true&size=128",
                basicLink: "https://lynk.id/your_link_basic_7",
                vipLink: "https://t.me/your_telegram_7"
            },
            {
                id: 16,
                name: "N",
                badge: "Viral!!!/Most Download/Top Rated",
                size: "1 MB",
                desc: "Desk",
                category: "Game/App/Tools/Trend",
                rating: 5,
                iconUrl: "https://ui-avatars.com/api/?name=PM&background=4ECDC4&color=fff&rounded=true&size=128",
                basicLink: "https://lynk.id/your_link_basic_7",
                vipLink: "https://t.me/your_telegram_7"
            },
            {
                id: 17,
                name: "N",
                badge: "Viral!!!/Most Download/Top Rated",
                size: "1 MB",
                desc: "Desk",
                category: "Game/App/Tools/Trend",
                rating: 5,
                iconUrl: "https://ui-avatars.com/api/?name=PM&background=4ECDC4&color=fff&rounded=true&size=128",
                basicLink: "https://lynk.id/your_link_basic_7",
                vipLink: "https://t.me/your_telegram_7"
            },
            {
                id: 18,
                name: "N",
                badge: "Viral!!!/Most Download/Top Rated",
                size: "1 MB",
                desc: "Desk",
                category: "Game/App/Tools/Trend",
                rating: 5,
                iconUrl: "https://ui-avatars.com/api/?name=PM&background=4ECDC4&color=fff&rounded=true&size=128",
                basicLink: "https://lynk.id/your_link_basic_7",
                vipLink: "https://t.me/your_telegram_7"
            },
            {
                id: 19,
                name: "N",
                badge: "Viral!!!/Most Download/Top Rated",
                size: "1 MB",
                desc: "Desk",
                category: "Game/App/Tools/Trend",
                rating: 5,
                iconUrl: "https://ui-avatars.com/api/?name=PM&background=4ECDC4&color=fff&rounded=true&size=128",
                basicLink: "https://lynk.id/your_link_basic_7",
                vipLink: "https://t.me/your_telegram_7"
            },
            {
                id: 20,
                name: "N",
                badge: "Viral!!!/Most Download/Top Rated",
                size: "1 MB",
                desc: "Desk",
                category: "Game/App/Tools/Trend",
                rating: 5,
                iconUrl: "https://ui-avatars.com/api/?name=PM&background=4ECDC4&color=fff&rounded=true&size=128",
                basicLink: "https://lynk.id/your_link_basic_7",
                vipLink: "https://t.me/your_telegram_7"
            },
            {
                id: 21,
                name: "N",
                badge: "Viral!!!/Most Download/Top Rated",
                size: "1 MB",
                desc: "Desk",
                category: "Game/App/Tools/Trend",
                rating: 5,
                iconUrl: "https://ui-avatars.com/api/?name=PM&background=4ECDC4&color=fff&rounded=true&size=128",
                basicLink: "https://lynk.id/your_link_basic_7",
                vipLink: "https://t.me/your_telegram_7"
            },
            {
                id: 22,
                name: "N",
                badge: "Viral!!!/Most Download/Top Rated",
                size: "1 MB",
                desc: "Desk",
                category: "Game/App/Tools/Trend",
                rating: 5,
                iconUrl: "https://ui-avatars.com/api/?name=PM&background=4ECDC4&color=fff&rounded=true&size=128",
                basicLink: "https://lynk.id/your_link_basic_7",
                vipLink: "https://t.me/your_telegram_7"
            },
            {
                id: 23,
                name: "N",
                badge: "Viral!!!/Most Download/Top Rated",
                size: "1 MB",
                desc: "Desk",
                category: "Game/App/Tools/Trend",
                rating: 5,
                iconUrl: "https://ui-avatars.com/api/?name=PM&background=4ECDC4&color=fff&rounded=true&size=128",
                basicLink: "https://lynk.id/your_link_basic_7",
                vipLink: "https://t.me/your_telegram_7"
            },
            {
                id: 24,
                name: "N",
                badge: "Viral!!!/Most Download/Top Rated",
                size: "1 MB",
                desc: "Desk",
                category: "Game/App/Tools/Trend",
                rating: 5,
                iconUrl: "https://ui-avatars.com/api/?name=PM&background=4ECDC4&color=fff&rounded=true&size=128",
                basicLink: "https://lynk.id/your_link_basic_7",
                vipLink: "https://t.me/your_telegram_7"
            },
            {
                id: 25,
                name: "N",
                badge: "Viral!!!/Most Download/Top Rated",
                size: "1 MB",
                desc: "Desk",
                category: "Game/App/Tools/Trend",
                rating: 5,
                iconUrl: "https://ui-avatars.com/api/?name=PM&background=4ECDC4&color=fff&rounded=true&size=128",
                basicLink: "https://lynk.id/your_link_basic_7",
                vipLink: "https://t.me/your_telegram_7"
            },
            {
                id: 26,
                name: "N",
                badge: "Viral!!!/Most Download/Top Rated",
                size: "1 MB",
                desc: "Desk",
                category: "Game/App/Tools/Trend",
                rating: 5,
                iconUrl: "https://ui-avatars.com/api/?name=PM&background=4ECDC4&color=fff&rounded=true&size=128",
                basicLink: "https://lynk.id/your_link_basic_7",
                vipLink: "https://t.me/your_telegram_7"
            },
            {
                id: 27,
                name: "N",
                badge: "Viral!!!/Most Download/Top Rated",
                size: "1 MB",
                desc: "Desk",
                category: "Game/App/Tools/Trend",
                rating: 5,
                iconUrl: "https://ui-avatars.com/api/?name=PM&background=4ECDC4&color=fff&rounded=true&size=128",
                basicLink: "https://lynk.id/your_link_basic_7",
                vipLink: "https://t.me/your_telegram_7"
            }
            // Add here++
        ];

        //FUNGSI RENDER KARTU
        const sliderContainer = document.getElementById('app-slider');
        const filteredContainer = document.getElementById('filtered-slider');
        const filteredSection = document.getElementById('filtered-section');
        const filteredTitle = document.getElementById('filtered-title');
        const noResult = document.getElementById('no-result');

        function parseSize(sizeStr) {
            const match = sizeStr.match(/(\d+(?:\.\d+)?)\s*(MB|GB)/i);
            if (!match) return 0;
            const num = parseFloat(match[1]);
            const unit = match[2].toUpperCase();
            return unit === 'GB' ? num * 1024 : num;
        }
        function debounce(fn, delay = 100) {
            let timer;
            return function (...args) {
                clearTimeout(timer);
                timer = setTimeout(() => fn.apply(this, args), delay);
            };
        }

        let currentSort = 'name-asc';

        function sortData(data, sortType) {
            const sorted = [...data];
            switch (sortType) {
                case 'name-asc':
                    sorted.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'name-desc':
                    sorted.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case 'size-asc':
                    sorted.sort((a, b) => parseSize(a.size) - parseSize(b.size));
                    break;
                case 'size-desc':
                    sorted.sort((a, b) => parseSize(b.size) - parseSize(a.size));
                    break;
                default:
                    break;
            }
            return sorted;
        }

        function renderCards(data, container = sliderContainer) {
            // hard reset
            container.innerHTML = '';

            if (container === filteredContainer) {
                if (data.length === 0) {
                    container.innerHTML = '<div class="text-center py-10 text-apple-muted"><i class="bx bx-folder-open text-4xl mb-2"></i><p>Tidak ada aplikasi di kategori ini.</p></div>';
                    return;
                }
            } else {
                if (data.length === 0) {
                    noResult.classList.remove('hidden');
                    container.classList.add('hidden');
                    return;
                }
                noResult.classList.add('hidden');
                container.classList.remove('hidden');
            }

            const MAX_CONCURRENT = 999999; // only used conceptually
            const BATCH_SIZE = 28; // tune: bigger = faster initial, smaller = less jank
            const total = data.length;
            let index = 0;
            let cancelled = false;

            // cancel any ongoing render loop for this container
            const key = container === sliderContainer ? 'main' : 'filtered';
            if (!renderCards._renderState) renderCards._renderState = {};
            if (renderCards._renderState[key]) {
                renderCards._renderState[key].cancelled = true;
            }
            renderCards._renderState[key] = { cancelled };

            const workChunk = () => {
                const state = renderCards._renderState[key];
                if (state && state.cancelled) return;

                const end = Math.min(index + BATCH_SIZE, total);
                const frag = document.createDocumentFragment();

                for (; index < end; index++) {
                    const app = data[index];
                    const cardHTML = `
                        <div class="snap-center shrink-0 w-[280px] sm:w-[320px] bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-ios border border-gray-100/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                            <div>
                                <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
                                    <img src="${app.iconUrl}" alt="${app.name} icon" loading="lazy" decoding="async" width="64" height="64" class="w-16 h-16 rounded-2xl object-cover shadow-sm group-hover:scale-105 transition-transform duration-300">
                                    <div class="flex flex-col flex-1 min-w-0">
                                        <div class="flex flex-wrap items-center gap-2 mb-2">
                                            <span class="px-3 py-1 bg-blue-50 dark:bg-blue-900/50 text-apple-blue dark:text-blue-300 text-xs font-semibold rounded-full border border-blue-100 dark:border-blue-800">
                                                ${app.badge}
                                            </span>
                                            <span class="text-xs text-apple-muted dark:text-gray-400 bg-slate-100 dark:bg-gray-700 px-2 py-1 rounded-full">${app.size}</span>
                                        </div>
                                        <h3 class="text-xl font-semibold text-apple-text dark:text-gray-100 mb-1 truncate">${app.name}</h3>
                                        <p class="text-sm text-apple-muted dark:text-gray-400 mb-3">⭐ ${app.rating} / 5</p>
                                    </div>
                                </div>
                                <div class="mb-6 overflow-hidden rounded-2xl bg-slate-50 dark:bg-gray-700 py-3 px-2 h-45">
                                    <div class="marquee marquee--paused text-sm text-apple-muted dark:text-gray-300 leading-relaxed" data-marquee="1">
                                        ${app.desc}
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col gap-3">
                                <a href="${app.basicLink}" target="_blank" rel="noreferrer noopener" class="w-full text-center px-4 py-2.5 rounded-2xl text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 active:scale-95">
                                    BASIC(Dengan Iklan+PW)
                                </a>
                                
                                <a href="${app.vipLink}" target="_blank" rel="noreferrer noopener" class="w-full text-center px-4 py-2.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-apple-blue hover:from-blue-600 hover:to-blue-700 shadow-sm transition-all duration-300 flex justify-center items-center gap-1.5 active:scale-95">
                                    <i class='bx bxs-crown text-base text-yellow-300'></i>
                                    NO PASSWORD & FAST INSTALL
                                </a>
                            </div>
                        </div>
                    `;
                    const temp = document.createElement('div');
                    temp.innerHTML = cardHTML;
                    frag.appendChild(temp.firstElementChild);
                }

                container.appendChild(frag);

                if (index < total) {
                    const idle = (window.requestIdleCallback || function (cb) { return setTimeout(cb, 0); });
                    idle(workChunk, { timeout: 50 });
                }
            };

            // kick off
            workChunk();

            // marquee visibility observer (runs after first batch + whenever more are appended)
            // We'll observe container itself; callback toggles child marquees by viewport visibility.
            if (!renderCards._marqueeObserver) {
                renderCards._marqueeObserver = new IntersectionObserver((entries) => {
                    for (const entry of entries) {
                        if (!entry.target || !entry.target.dataset) continue;
                        const el = entry.target;
                        if (entry.isIntersecting) {
                            el.classList.remove('marquee--paused');
                        } else {
                            el.classList.add('marquee--paused');
                        }
                    }
                }, { root: null, threshold: 0.25 });
            }

            const marquees = container.querySelectorAll('[data-marquee="1"]');
            marquees.forEach(m => renderCards._marqueeObserver.observe(m));
        }
        // Render awal saat halaman dimuat
        renderCards(appsData);
        // LOGIKA PENCARIAN
        function handleSearch(e) {
            const searchText = e.target.value;
            const keyword = searchText.toLowerCase();
            const filteredData = appsData.filter(app => 
                app.name.toLowerCase().includes(keyword) || 
                app.desc.toLowerCase().includes(keyword) ||
                app.badge.toLowerCase().includes(keyword)
            );
            renderCards(filteredData);

            const desktopInput = document.getElementById('searchInputDesktop');
            const mobileInput = document.getElementById('searchInputMobile');
            if (e.target === desktopInput && mobileInput.value !== searchText) {
                mobileInput.value = searchText;
            }
            if (e.target === mobileInput && desktopInput.value !== searchText) {
                desktopInput.value = searchText;
            }

            filteredSection.classList.add('hidden');
        }

        const debouncedSearch = debounce(handleSearch, 120);
        document.getElementById('searchInputDesktop').addEventListener('input', debouncedSearch);
        document.getElementById('searchInputMobile').addEventListener('input', debouncedSearch);
        //LOGIKA SCROLL SLIDER
        const scrollAmount = 340; //perkiraan lebar kartu + gap
        
        function slideLeft() {
            sliderContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }

        function slideRight() {
            sliderContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
//SMOOTH SCROLL DARI HERO KE CATALOG
        function scrollToCatalog() {
            document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
        }
//LOGIKA KATEGORI MENU
        const categoryMenuBtn = document.getElementById('categoryMenuBtn');
        const categoryDropdown = document.getElementById('categoryDropdown');

        categoryMenuBtn.addEventListener('click', () => {
            const isHidden = categoryDropdown.classList.contains('hidden');
            if (isHidden) {
                categoryDropdown.classList.remove('hidden');
                setTimeout(() => {
                    categoryDropdown.classList.remove('opacity-0', 'translate-y-2');
                }, 10);
            } else {
                categoryDropdown.classList.add('opacity-0', 'translate-y-2');
                setTimeout(() => {
                    categoryDropdown.classList.add('hidden');
                }, 300);
            }
        });
// Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!categoryMenuBtn.contains(e.target) && !categoryDropdown.contains(e.target)) {
                categoryDropdown.classList.add('opacity-0', 'translate-y-2');
                setTimeout(() => {
                    categoryDropdown.classList.add('hidden');
                }, 300);
            }
        });
 // Handle category selection
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                filterByCategory(category);
                categoryDropdown.classList.add('opacity-0', 'translate-y-2');
                setTimeout(() => {
                    categoryDropdown.classList.add('hidden');
                }, 300);
            });
        });
        function filterByCategory(category) {
            let filteredData;
            if (category === 'Trend') {
                filteredData = appsData.filter(app => 
                    app.badge === "Most Download" || app.badge === "Top Rated" || app.badge ==="Viral!!!"
                );
            } else {
                filteredData = appsData.filter(app => app.category === category);
            }
            
            filteredData = sortData(filteredData, currentSort);
            filteredTitle.textContent = `Kategori: ${category}`;
            renderCards(filteredData, filteredContainer);
            filteredSection.classList.remove('hidden');
            // Scroll to filtered section
            filteredSection.scrollIntoView({ behavior: 'smooth' });
        }

        function clearFilter() {
            filteredSection.classList.add('hidden');
            renderCards(appsData); // Reset to all apps
        }

        function setSort(sortType) {
            currentSort = sortType;
            // Jika filtered section terlihat, re-render dengan sorting baru
            if (!filteredSection.classList.contains('hidden')) {
                const category = filteredTitle.textContent.replace('Kategori: ', '');
                filterByCategory(category);
            }
        }

        // Help Menu Functionality
        const helpFab = document.getElementById('help-fab');
        const helpPopup = document.getElementById('help-popup');
        const liveChatBtn = document.getElementById('live-chat-btn');
        const panduanBtn = document.getElementById('panduan-btn');
        const faqBtn = document.getElementById('faq-btn');
        const panduanModal = document.getElementById('panduan-modal');
        const closePanduan = document.getElementById('close-panduan');
        const panduanOverlay = document.getElementById('panduan-overlay');

        helpFab.addEventListener('click', () => {
            const isHidden = helpPopup.classList.contains('hidden');
            if (isHidden) {
                helpPopup.classList.remove('hidden');
                setTimeout(() => {
                    helpPopup.classList.remove('opacity-0', 'translate-y-4');
                }, 10);
            } else {
                helpPopup.classList.add('opacity-0', 'translate-y-4');
                setTimeout(() => {
                    helpPopup.classList.add('hidden');
                }, 300);
            }
        });

        // Close popup when clicking outside
        document.addEventListener('click', (e) => {
            if (!helpFab.contains(e.target) && !helpPopup.contains(e.target)) {
                helpPopup.classList.add('opacity-0', 'translate-y-4');
                setTimeout(() => {
                    helpPopup.classList.add('hidden');
                }, 300);
            }
        });

        liveChatBtn.addEventListener('click', () => {
            window.open('https://t.me/iMDeCentre', '_blank'); // Ganti dengan link Telegram Anda
            helpPopup.classList.add('opacity-0', 'translate-y-4');
            setTimeout(() => {
                helpPopup.classList.add('hidden');
            }, 300);
        });

        panduanBtn.addEventListener('click', () => {
            panduanModal.classList.remove('hidden');
            setTimeout(() => {
                panduanModal.classList.remove('opacity-0');
            }, 10);
            helpPopup.classList.add('opacity-0', 'translate-y-4');
            setTimeout(() => {
                helpPopup.classList.add('hidden');
            }, 300);
        });

        faqBtn.addEventListener('click', () => {
            window.location.href = 'private/faq.html';
        });

        closePanduan.addEventListener('click', () => {
            panduanModal.classList.add('opacity-0');
            setTimeout(() => {
                panduanModal.classList.add('hidden');
            }, 300);
        });

        panduanOverlay.addEventListener('click', () => {
            panduanModal.classList.add('opacity-0');
            setTimeout(() => {
                panduanModal.classList.add('hidden');
            }, 300);
        });

        // Dark Mode Toggle
        const darkModeToggle = document.getElementById('darkModeToggle');
        const darkModeIcon = document.getElementById('darkModeIcon');
        const html = document.documentElement;

        // Check for saved theme preference or default to light mode
        const savedTheme = localStorage.getItem('theme') || 'light';
        if (savedTheme === 'dark') {
            html.classList.add('dark');
            darkModeIcon.innerHTML = '🌙';
        } else {
            html.classList.remove('dark');
            darkModeIcon.innerHTML = '☀️';
        }

        darkModeToggle.addEventListener('click', () => {
            console.log('Current classes:', html.classList.contains('dark'));
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                darkModeIcon.innerHTML = '☀️';
                localStorage.setItem('theme', 'light');
                console.log('Switched to light mode');
            } else {
                html.classList.add('dark');
                darkModeIcon.innerHTML = '🌙';
                localStorage.setItem('theme', 'dark');
                console.log('Switched to dark mode');
            }
        });

        // Toast Notification System
        const toastContainer = document.getElementById('toast-container');
        const names = ['AlexTzy', 'fauzan01', 'AdamMh', 'Wowo', 'Fufaffa', 'rizky', 'David', 'surya', 'Agus', 'chelln','Putra07'];
        const apps = ['KineMastr', 'PPSSPP Gold', 'GTA LibrtyCty', 'GTA ViceCty', 'ToyStory 3', 'Naruto Ultimate Ninja Storm', 'NFS Most Wanted','FNAF 4'];
        const timeUnits = ['detik', 'menit', 'jam'];

        function getRandomTime() {
            const unit = timeUnits[Math.floor(Math.random() * timeUnits.length)];
            let value;
            switch (unit) {
                case 'detik':
                    value = Math.floor(Math.random() * 59) + 1;
                    break;
                case 'menit':
                    value = Math.floor(Math.random() * 59) + 1;
                    break;
                case 'jam':
                    value = Math.floor(Math.random() * 23) + 1;
                    break;
            }
            return `${value} ${unit}`;
        }

        function showToast() {
            const name = names[Math.floor(Math.random() * names.length)];
            const app = apps[Math.floor(Math.random() * apps.length)];
            const time = getRandomTime();

            const toast = document.createElement('div');
            toast.className = 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-w-xs toast-slide-in';
            toast.innerHTML = `
                <div class="flex items-center gap-2">
                    <span class="text-lg">🎉</span>
                    <div class="flex-1 text-sm">
                        <span class="font-medium">${name}</span> telah membeli <span class="font-medium">${app}</span> <span class="text-gray-500 dark:text-gray-400">${time} yang lalu</span>
                    </div>
                </div>
            `;

            toastContainer.appendChild(toast);

            // Remove toast after 5 seconds
            setTimeout(() => {
                toast.classList.add('toast-fade-out');
                setTimeout(() => {
                    if (toast.parentNode) {
                        toast.parentNode.removeChild(toast);
                    }
                }, 500);
            }, 5000);
        }

        function scheduleNextToast() {
            const delay = Math.random() * (20000 - 7000) + 7000; // Random delay between 6-20 seconds
            setTimeout(() => {
                showToast();
                scheduleNextToast(); // Schedule the next toast
            }, delay);
        }

        // Start the toast notification system
        let __toastPaused = false;
        const __pauseToast = () => {
            __toastPaused = document.hidden === true;
        };
        document.addEventListener('visibilitychange', __pauseToast);
        __pauseToast();

        function scheduleNextToast() {
            if (__toastPaused) return;
            const delay = Math.random() * (20000 - 6000) + 6000; // Random delay between 6-20 seconds
            setTimeout(() => {
                if (__toastPaused) return;
                showToast();
                scheduleNextToast();
            }, delay);
        }

        // Start the toast notification system
        scheduleNextToast();
