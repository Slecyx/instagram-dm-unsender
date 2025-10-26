// ================================
//  🔥 InstaPurge Custom Edition 🔥
//  Author: Yiğit Kurt
//  Version: 1.0.0
//  Date: 27/09/2025
// ================================

console.log(`
██████╗ ██╗      ██████╗ ██╗
██╔══██╗██║     ██╔═══██╗██║
██║  ██║██║     ██║   ██║██║
██║  ██║██║     ██║   ██║██║
██████╔╝███████╗╚██████╔╝██║
╚═════╝ ╚══════╝ ╚═════╝ ╚═╝

⚡ InstaPurge Modified by: Yiğit Kurt ⚡
🚀 Custom Build - 2025
`);

// ================================

load = true; // chat yükleme
del = true;  // mesaj silme
delReact = true; // reaksiyon silme

loadChat();
// deleteChat();

function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadChat() {
	let conversationWindow = document.getElementsByClassName(
		"x78zum5 xdt5ytf x1iyjqo2 xs83m0k x1xzczws x6ikm8r x1odjw0f x1n2onr6 xh8yej3 x16o0dkt"
	)[1];
	let lastScrollTop = conversationWindow.scrollTop;
	let samePositionTime = 0;

	while (load) {
		conversationWindow.scrollTo(0, 0);
		await delay(250);

		if (conversationWindow.scrollTop === lastScrollTop) {
			samePositionTime += 250;
		} else {
			samePositionTime = 0;
		}

		if (samePositionTime >= 3000) break;
		lastScrollTop = conversationWindow.scrollTop;
	}

	conversationWindow.scrollTo(0, conversationWindow.scrollHeight);
	await delay(100);
	deleteChat();
}

async function deleteMessages(conversation, messages) {
	for (let i = messages.length - 1; i >= 0; i--) {
		let lastMessage = messages[i];
		let scrolled = false;

		if (lastMessage.getBoundingClientRect().top > window.innerHeight - 77) continue;

		let conversationWindow = document.getElementsByClassName(
			"x78zum5 xdt5ytf x1iyjqo2 xs83m0k x1xzczws x6ikm8r x1odjw0f x1n2onr6 xh8yej3 x16o0dkt"
		)[1];

		if (lastMessage.classList.length === 1) {
			conversationWindow.scrollBy(0, -50);
			scrolled = true;
			continue;
		}

		let lastMessagePosition = lastMessage.getBoundingClientRect();
		if (lastMessagePosition.top - 75 < 0) {
			lastMessage.scrollIntoView();
			scrolled = true;
			await delay(75);
		}

		lastMessage.dispatchEvent(
			new MouseEvent("mouseover", {
				view: window,
				bubbles: true,
				cancelable: true,
			})
		);
		await delay(25);

		let options = lastMessage.getElementsByClassName("x6s0dn4 x78zum5 xdt5ytf xl56j7k");
		if (options.length === 0) {
			conversation.click();
			await deleteReaction(lastMessage);
			continue;
		}

		let option = options[options.length - 1];
		if (!option.querySelector("title").textContent.toLowerCase().includes("more")) {
			conversation.click();
			await deleteReaction(lastMessage);
			continue;
		}

		option.click();
		await delay(25);

		let moreUI = document.getElementsByClassName(
			"html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl x9f619 xjbqb8w x78zum5 x15mokao x1ga7v0g x16uus16 xbiv7yw x1uhb9sk x1plvlek xryxfnj x1iyjqo2 x2lwn1j xeuugli xdt5ytf xqjyukv x1cy8zhl x1oa3qoh x1nhvcw1"
		);
		let button = moreUI[moreUI.length - 1];
		let unsendOrReport = button.querySelector("span").getElementsByClassName("x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft");

		if (unsendOrReport[0].innerText === "Unsend") {
			button.click();
			await delay(75);
			document
				.getElementsByClassName(
					"xjbqb8w x1qhh985 x10w94by x14e42zd x1yvgwvq x13fuv20 x178xt8z x1ypdohk xvs91rp x1evy7pa xdj266r x14z9mp xat24cr x1lziwak x1wxaq2x x1iorvi4 xf159sx xjkvuk6 xmzvs34 x2b8uid x87ps6o xxymvpz xh8yej3 x52vrxo x4gyw5p xkmlbd1 x1xlr1w8"
				)[0]
				.click();
		} else {
			conversation.click();
			await delay(50);
			await deleteReaction(lastMessage);
		}
		if (!scrolled) conversationWindow.scrollBy(0, -30);
	}
}

async function deleteReaction(lastMessage) {
	try {
		if (delReact) {
			let checkReaction = lastMessage.getElementsByClassName(
				"x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xc5r6h4 xqeqjp1 x1phubyo x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x972fbf x10w94by x1qhh985 x14e42zd x9f619 x1ypdohk xdl72j9 x2lah0s x3ct3a4 xdj266r x14z9mp xat24cr x1lziwak x2lwn1j xeuugli xexx8yu xyri2b x18d9i69 x1c1uobl x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1fmog5m xu25z0z x140muxe xo1y3bh x3nfvp2 x1q0g3np x87ps6o x1lku1pv x1a2a7pz"
			);
			if (checkReaction.length > 0) {
				let reaction = checkReaction[0];
				reaction.click();
				await delay(25);
				let popupConfirmation = document.getElementsByClassName(
					"x1ja2u2z x1afcbsf x1a2a7pz x6ikm8r x10wlt62 x71s49j x6s0dn4 x78zum5 xdt5ytf xl56j7k x1n2onr6"
				);
				popupConfirmation = popupConfirmation[popupConfirmation.length - 1];
				let spans = popupConfirmation.getElementsByClassName(
					"x1lliihq x1plvlek xryxfnj x1n2onr6 xyejjpt x15dsfln x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xvs91rp xo1l8bm x1roi4f4 x1tu3fi x3x7a5m x10wh9bi xpm28yp x8viiok x1o7cslx"
				);
				if (spans.length > 0) spans[spans.length - 1].click();
				let close = popupConfirmation.querySelector('[aria-label="Close"]');
				if (close) close.click();
				await delay(25);
			}
		}
	} catch {
		deleteReaction(lastMessage);
	}
}

async function deleteChat() {
	try {
		while (del) {
			let conversation = document.getElementsByClassName(
				"x78zum5 xdt5ytf x1iyjqo2 xs83m0k x1xzczws x6ikm8r x1odjw0f x1n2onr6 xh8yej3 x16o0dkt"
			)[1];
			let messages = conversation.querySelectorAll('[data-release-focus-from="CLICK"]');
			await deleteMessages(conversation, messages);

			let conversationWindow = document.getElementsByClassName(
				"x78zum5 xdt5ytf x1iyjqo2 xs83m0k x1xzczws x6ikm8r x1odjw0f x1n2onr6 xh8yej3 x16o0dkt"
			)[1];
			if (conversationWindow.scrollTop <= 1) break;
		}

		// ✅ İşlem bitti bildirimi
		console.log("✅ Tüm mesajlar başarıyla silindi! - Script by Yiğit Kurt");
		alert("🔥 Tüm mesajlar başarıyla silindi - Powered by Yiğit Kurt 🔥");

	} catch {
		deleteChat();
	}
}
